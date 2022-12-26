export function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) if (i % 2 == 0) sum += i;
    return sum;
}
export function iterationCount(a) {
    let i = 0;
    while (a > 0.1) {
        i++;
        a /= 2;
    }
    return i;
}
export function symbolsReplace(message) {
    let i = 2;
    do {
        message =
            message.substring(0, i) +
            '_' +
            message.substring(i + 1, message.length);
        i += 3;
    } while (i < message.length);
    return message;
}
