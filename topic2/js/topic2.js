'use strict'
class Movie{
    constructor(title, year, duration){
        this.title=title;
        this.year=year;
        this.duration=duration;

    }
    full_movie(){
        return (this.title+this.year+this.duration);
    }
    play(){

    }
    pause(){

    }
    resume(){

    }
}
const peli = new Movie("la sirenita","1996","1.45");
console.log(peli);

class Actor{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    full_actor(){
        return(this.name+this.age)
    }

}
const actor=new Actor("James Dean","87");
console.log(actor);

class EventEmitter {
    constructor() {
    }
        on(eventName, callback){
            
        }
}
