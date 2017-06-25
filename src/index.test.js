//import {expect} from 'chai';
//import jsdom from 'jsdom';
//import fs from 'fs';

var expect = require('chai').expect;
var jsdom = require('jsdom');
var fs = require('fs');

describe('Test Case 1', () =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  })
})

describe('Test Case 2', () =>{
  it('should say Hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err,window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Cheers buddy!");
      done();
      window.close();
    });
    expect(true).to.equal(true);
  })
})
