const assert = require("chai").assert;

const app = require("../app");

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe("App", function () {
  describe("sayHello()", () => {
    it("sayHello() should return hello", function () {
      assert.equal(sayHelloResult, "hello");
    });

    it("sayHello() should return type string", () => {
      assert.typeOf(sayHelloResult, "string");
    });
  });

  describe("addNumbers()", () => {
    it("Add numbers should be above 5", () => {
      assert.isAbove(addNumbersResult, 5);
    });

    it("addNumbers() should return 1", () => {
      const result = app.addNumbers(0, 1);
      assert.equal(result, 1);
    });

    it("addNumbers() result should return type number", () => {
      const result = app.addNumbers(2, 3);
      assert.typeOf(result, "number");
    });
  });
});
