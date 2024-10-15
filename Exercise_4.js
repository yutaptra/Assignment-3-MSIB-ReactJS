// Nama Lengkap : Yusri Afta Putra
// Kode Peserta : RCJ05S009

function arrSum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSum + arr[i]) {
      currentSum = arr[i];
      tempStart = i;
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return [arr.slice(start, end + 1), maxSum];
}

// TEST CASES
console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // output: [[4, -1, -2, 1, 5], 7]