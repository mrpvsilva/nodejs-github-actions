const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should succes when get is hello world', (done) => {
        request(app)
            .get('/')
            .expect(200, 'Hello World!', done);

    })
});
