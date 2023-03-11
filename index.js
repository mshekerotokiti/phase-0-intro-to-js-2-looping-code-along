// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}  

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


const names= (['sharon', 'milan', 'helen'], 'birthday');
let thankYouArray= [];
function writeCards(names , event){
    for (let i=0 ; i<  names.length; i++){
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouArray;
}

function countDown(){
    let count = 10;
    while (count >=0){
        console.log(count --);
        
    }
}