// 1.
class Animal {
    constructor(sound, name) {
        this._sound = sound;
        this._name = name;
    }
    speak() {
        console.log(`This animal says ${this._sound}`);
    }
    sayName() {
        console.log(`My name is ${this._name}`);
    }
    // 6.
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
// 2.
class Dog extends Animal{
    constructor(sound, name) {
        super(sound, name);
    }
}
// 3.
const myDog = new Dog('woof', 'Scooby');
// 4.
console.log(myDog);
// 5.
myDog.speak();
// 7.
myDog.name = 'Ash';
// 8.
console.log(myDog.name);
