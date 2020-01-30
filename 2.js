// with for
function MinMax(arr) {
   let minIndex = 0;
   let maxIndex = 1;
   let min = arr[0];
   let max = arr[1];

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] < min) {
       min = arr[i];
       minIndex = i;
     }
     if (arr[i] > max) {
       max = arr[i]
       maxIndex = i;
     }
   }
   return [minIndex,maxIndex]
 }

 console.log(MinMax([9, 4, -1, 2, 7, 8, 0, 11]))
// with do..while
function MinMax(arr) {
   let minIndex = 0;
   let maxIndex = 1;
   let min = arr[0];
   let max = arr[1];

   let i = 0;
do {
 if (arr[i] < min) {
       min = arr[i];
       minIndex = i;
     }
     if (arr[i] > max) {
       max = arr[i]
       maxIndex = i;
     }
i++;
} while(i < arr.length);
   return [minIndex,maxIndex]
 }

 console.log(MinMax([9, 4, -1, 2, 7, 8, 0, 11]))
