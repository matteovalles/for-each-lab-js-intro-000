function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const arr = [1,2,3,4]
  arr.forEach(callback(arr))
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
