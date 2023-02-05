import { add, Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('zhangsan')).toBe('Hello zhangsan');
});

test('Add', () => {
  expect(add(1, 2)).toEqual(3);
})
