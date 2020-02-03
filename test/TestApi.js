const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "http://seeinstore.rtg-prod.com/";
const util = require("util");

describe('Should return 200 true', function() {
    it('Should return 200 true', function(done) {
        request.get({ url: baseUrl + "seeInStore?sku=7005451p&zipcode=33610" },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
                console.log(response.statusCode);
                console.log(response.request.href);
                expect(response.statusCode).to.equal(200);
                done();
            });
    });
});

describe('Should Return a 400 Invalid', function() {
    it('Should Return a 400 Invalid', function(done) {
        request.get({ url: baseUrl + "seeInStore?sku=7005451p" },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
                console.log(response.statusCode);
                console.log(response.request.href);
                expect(response.statusCode).to.equal(400);
                done();
            });
    });
});
