const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return true when the car is pink",
    function() {
      const car = { color: 'pink' };
      const decision = shouldBuyCar(car);
      assert.isTrue(decision);
    }
  );
  
   it('should return false when there are no details about the car',
    function() {
      const car = {};
      const decision = shouldBuyCar(car);
      assert.isFalse(decision);
    }
  );
  
  it("should return false when the car is a hatchback",
    function() { // 4
      const car = {
        type: "hatchback"
      };
      const decision = shouldBuyCar(car);
      assert.isFalse(decision);
    }
  );
  
  it("should return false when the car is a hatchback and pink",
    function() {
      const car = { type: 'hatchback', color: 'pink'};
      const decision = shouldBuyCar(car);
      assert.isFalse(decision);
    }
  );

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000",
    function() {
      const car = { litresPer100km: 6, price: 5000};
      const decision = shouldBuyCar(car);
      assert.isTrue(decision);
    }
  );
  
  it("should return true when the car has 11 litres/100km and is under or equal to $5,000",
    function() {
      const car = { litresPer100km: 11, price: 5000};
      const decision = shouldBuyCar(car);
      assert.isTrue(decision);
    }
  );
  
  it("should return false when the car has 6 litres/100km and is over $5,000",
    function() {
      const car = { litresPer100km: 6, price: 5001};
      const decision = shouldBuyCar(car);
      assert.isFalse(decision);
    }
  );
  
  it("should return false when the car has 11 litres/100km and is over $5,000",
    function() {
      const car = { litresPer100km: 11, price: 5001};
      const decision = shouldBuyCar(car);
      assert.isFalse(decision);
    }
  );
  
  it("should return false when the car has 5 litres/100km and is under or equal to $5,000",
    function() {
      const car = { litresPer100km: 5, price: 5000};
      const decision = shouldBuyCar(car);
      assert.isFalse(decision);
    }
  );
  
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000",
    function() {
      const car = { litresPer100km: 12, price: 5000};
      const decision = shouldBuyCar(car);
      assert.isFalse(decision);
    }
  );
  
  it("should return undefined when there is no car",
    function() {
      const decision = shouldBuyCar();
      assert.isUndefined(decision);
    }
  );
  
  });
  
/* Happy Path
it("should return true if the user is old enough", function() {
  const user = {
    age: 18 // Edge Case
  };
  const canSignUp = signUpUser(user);
  assert.isTrue(canSignUp);
);

 Sad Path
it("should return false if the user is not old enough", function() {
  const user = {
    age: 17 // Edge Case
  };
  const canSignUp = signUpUser(user);
  assert.isFalse(canSignUp);
}); */
