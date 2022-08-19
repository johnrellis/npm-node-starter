const assert = require('assert');
const Calculator = require('../src/calculator');

describe('Unit#calculator', () => {
  it('should be able to add', () => {
    const calculator = new Calculator();
    assert.equal(calculator.add(2, 2), 4);
  });
});
