import Controller from '@ember/controller';
import substring from '../helpers/substring';

export default class ApplicationController extends Controller {
  string = 'hello';

  get substringFromImportedFunction() {
    return substring(this.string, { start: 0, end: 2 });
  }
}
