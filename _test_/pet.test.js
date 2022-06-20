const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });
describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });
  
describe ("pet.fitness",()=>{
    it('decrease fitness when age increase by 1',() => {
  const pet = new Pet ('Fido');
        pet.growUp();
        expect (pet.fitness).toEqual(7);
      });
  });
describe ("pet.hunger",()=>{
    it('increase hunger when age increase by 1',() => {
  const pet = new Pet ('Fido');
        pet.growUp();
        expect (pet.hunger).toEqual(5)
      });
    });

describe('walk', () => {
    it('increases fitness by 4', () => {
  const pet = new Pet('fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
      });
      it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
      });
     });
describe('Feed', () => {
      it('decrease hunger by 3', () => {
        const pet = new Pet('fido');
          pet.hunger = 6;
          pet.feed();
          expect(pet.hunger).toEqual(3);
        });
        it('decreasehunger by to a minimum of 0', () => {
        const pet = new Pet('fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
      });
      it('throws an error if the pet is not alive', () => {
        const pet = new Pet('fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
    });
describe('Check up', () => {
      it('returns "I need a walk" if pet fitness <= 3 and hunger < 5', () => {
        const pet = new Pet('fido');
          pet.hunger = 4;
          pet.fitness = 3;
          expect(pet.checkUp()).toEqual ("I need a walk");
      });
      it('returns "I am hungry" if pet fitness>3 and hunger >=5', () => {
        const pet = new Pet('fido');
          pet.hunger = 5;
          pet.fitness =4;
          expect(pet.checkUp()).toEqual ("I am hungry");
      });
      it('returns "I am hungry AND I need a walk" if pet fitness<=3 and hunger >=5', () => {
        const pet = new Pet('fido');
          pet.hunger = 5;
          pet.fitness =3;
          expect(pet.checkUp()).toEqual ("I am hungry And I need a walk");
      });
      it('returns "I feel great" if pet fitness<=3 and hunger >=5', () => {
        const pet = new Pet('fido');
          pet.hunger = 0;
          pet.fitness = 10;
          expect(pet.checkUp()).toEqual ("I feel great");
      });
      it ('throws an error if the pet is not alive',() => {
        const pet = new Pet ('fido');
        pet.age=30;
        expect(() => pet.checkUp()).toThrow ("Your pet is no longer alive :(");
      });
    });
describe('isAlive',()=>{
  it('returns true if age<30 && hunger<10 && fitness>=0' ,() => {
        const pet =new Pet ('fido');
        expect(pet.isAlive).toEqual (true)
      });
  it('returns true if age>=30 && hunger>=10 && fitness<=0' ,() => {
        const pet =new Pet ('fido');
        pet.hunger = 10;
        expect(pet.isAlive).toEqual (false)
      });
    });