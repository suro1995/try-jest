jest.mock('../src/sum');

const sum = require('../src/sum');

describe('sum', () => {  
  test('add 1 + 1', () => {
    sum(1, 1);
    sum.baz = 'baz';
    global.baz = 'baz';
    console.log(sum.foo);
    console.log(global.foo);
    expect(sum).toHaveBeenCalledTimes(1);
  });

  test('add 1 + 1', () => {
    sum(1, 1);
    sum.foo = 'foo';
    global.foo = 'foo';
    console.log(sum.baz);
    console.log(global.baz);
    expect(sum).toHaveBeenCalledTimes(1);
  });
})
