import Route from '@ember/routing/route';
import $ from 'jquery';

export default class extends Route {
    model(params) {
	let url = 'https://www.reddit.com/r/javascript.json';
	let json = null;
	return $.get(url);
   }
}
