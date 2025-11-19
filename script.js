//UPPGIFT 2:
{
    var message = "Hello, World!";

    let car = "Volvo";
  
    const food = "Pizza";

}

/* 
UPPGIFT 2:

1. hur dessa skiljer sig är: var kan du nå "överallt" typ men dem andra går inte efter som att dem befinner sig i ett block scope. detta ser man tydligt när man försöker kalla på dessa olika varibler med console.log även fast inget skrivs ut kan vi se att de nås.
2. 
Före:
var undefined
let ReferenceError: car is not defined
const ReferenceError: food is not defined

inuti blocket:
alla tre skriver ut sina värden.

Efter:
var skriver ut sitt värde
let ReferenceError: car is not defined
const ReferenceError: food is not defined
*/

// UPPGIFT 3:

// true
console.log('3' == 3);

// false
console.log('3' === 3);

// false
console.log(NaN === NaN);

// true
console.log(null == undefined);

// false
console.log(null === undefined);

//false
console.log(undefined ? true: false);

/*
UPPGIFT 3:

1. == jämför bara värdet mellan variablerna, så att '3' är lika med 3, är sant. Men att '3' skulle vara samma typ som 3 är falskt, där === kollar strickt både värde och typ.
2. till och börja med så jämför vi inte undefined med nått, vi bara säger är det sant eller falskt, så i JavaScript så är det oftast så att "tomma" värden blir falskt. som NaN, null, undefined etc.
3. 
NaN: betyder not a number, att det inte är ett nummer.
undefined: betyder att en variabel har skapats men inte fått något värde.
null: betyder att en har skapats variabel och fått värdet "ingenting".
*/

// UPPGIFT 4:

let name = "Erik";

function greet(name){
    console.log(name);
 return "Hello, " + name;
}

console.log(name); 
console.log(greet("Miakela"));


/*
UPPGIFT 4:

1. 
funktionsdeklaration: är det klassiska sättet att deklarera en funtion, man skriver ncykelordet funtion sedan namn och dess parametrar.
funktionsuttryck: är när man skapar en funtion och sätter den till en variabel, så att man deklararer en variabel som är lika med en namnlös funktion med dess parametrar.
arrowfunction: är lite som funktionsuttryck men att man skriver den lite annorlunda så att vi inte behöver nyckelordet funtion utan kan istället skriva ut en parameter följt av => och sedan måsvingar. lite nyare

varför jag valde att skriva min kod med funktionsdeklaration är för att jag är mest van med det sättet, sedan tycker jag att det är enklare att läsa av, specielt för denna uppggift.

2. 
funktionsdeklaration: denna kan du anropa raden innan den ens är deklarerad.
funktionsuttryck och arrowfunction:  dessa kan du inte anropa innan, dem måste deklareras först.

3. skulle vi ändra variabeln utanför funktionen till vad som helst och anropa den utanför funktioen skulle vi få ut de värdet vi tilldelade den. Just nu har jag värdet Erik, men kunde lika gärna vart Kalle.
samma sak gäller om vi skulle anropa i funktionen men en conlsole.log av name parametern, sen en console.log av det namnet vi vill "greet"

4.
paramenter: är själva variabeln som finns i funktionen, som i detta fall name
variabel: är som en låda/behållaer som innehåller ett värde som kan användas senare.
argument: är det värdet som skickas in till funktionen när den anropas: som greet("Miakela") där Miakela är argumentet.
*/

// EXTRA UPPGIFT:

var num1 = prompt("Ange första numret:");
var num2 = prompt("Ange andra numret:");

var nummer1 = Number(num1);
var nummer2 = Number(num2);

if(isNaN(nummer1) || isNaN(nummer2)){
   alert("Vänligen ange giltiga nummer.");
}else{
    var resultObject = calculate(nummer1, nummer2);
   console.table(resultObject);
   prompt("Sum: " + resultObject.sum + "\nProduct: " + resultObject.product + "\nEquals: " + resultObject.equals);
}

  
function calculate(num1, num2){
    var sum = num1 + num2;
    var product = num1 * num2;
    var equals = num1 === num2;

return {
    sum: sum,
    product: product,
    equals: equals
};
}


