const husbandBrings = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Butter');
  }, 2000);
});

const wifeBrings = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Bread');
  }, 3000);
});

Promise.all([husbandBrings, wifeBrings])
  .then(results => {
    console.log('results:', results);
    console.log(`Toast is ready with ${results[0]} and ${results[1]}`);
  })
  .catch(err => {
    console.error(err);
  });
