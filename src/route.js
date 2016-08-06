/**
 * Created by zhagnian on 16-8-5.
 */
let firstItem = require('./commands/main-page.js');
let originItem = {
    '#': firstItem
};
let item = originItem;
function route(input) {
    let order = item[input] || item['#'];

    let respond = order(input);

    if (respond.newItem) {
        item = respond.newItem;
        return {text: respond.text};
    }
    if (respond.err) {
        return {text: respond.err}
    }

    return {text: respond.text};

}
module.exports = route;