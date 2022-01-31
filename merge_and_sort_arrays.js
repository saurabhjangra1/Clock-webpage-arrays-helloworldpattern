let arr1 = [
    {
      name: 'xyz',
      age: 10
    },
     {
      name: 'ert',
      age: 4
    },
      {
      name: 'mvm',
      age: 45
    },
     {
      name: 'rere',
      age: 56
    },
  ]
  
  let arr2 = [
    {
      name: 'fdcd',
      age: 32
    },
     {
      name: 'ter',
      age: 1
    },
      {
      name: 'fdfg',
      age: 3
    },
     {
      name: 'gfdgd',
      age: 15
    },
]
let ansArr = arr1.concat(arr2);
console.log(ansArr);

console.log("Sorted the merged array");
ansArr.sort(function(a,b){return a.age-b.age});
console.log(ansArr);