// Progression #1: The lengthy word
const word = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function longest(word){
    let largest="";
    for(let i=0;i<word.length;i++){
        if(word[i].length>largest.length){
            largest=word[i];
        }
    }
    return largest;
}
console.log(longest(word));

// Progression #2: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let netprice=0;
for(let i=0;i<numbers.length;i++){
netprice=netprice+numbers[i];
}
console.log(netprice);

// Progression #3: Calculate the average
// Progression 3.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function average(numbersAvg){
    let sum=0;
    let avg;
    for(let i=0;i<numbersAvg.length;i++){
        sum=sum+numbersAvg[i];
    }
    avg=sum/(numbersAvg.length);
    return avg;
}
console.log(average(numbersAvg));

// Progression #4: Unique arrays
const wordsUnique = [
    'bread',
    'jam',
    'milk',
    'egg',
    'flour',
    'oil',
    'rice',
    'coffee powder',
    'sugar',
    'salt',
    'egg',
    'flour'
  ];
  const uni=(value,index,self)=>{
      return self.indexOf(value)===index
  }
  const uniquearr=wordsUnique.filter(uni)
  console.log(uniquearr)

  // Progression #5: Count repetition
  const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
 function compress(wordsCount){
     var com=[];
     var copy=wordsCount.slice(0);
     for(var i=0;i<wordsCount.length;i++){
         var mycount=0;
         for(var w=0;w<copy.length;w++){
             if(wordsCount[i]==copy[w]){
                 mycount++;
                 delete copy[w];
             }
         }
         if(mycount>0){
             var a=new Object();
             a.value=wordsCount[i];
             a.count=mycount;
             com.push(a);
         }
     }
     return com;
 };
console.log(compress(wordsCount));