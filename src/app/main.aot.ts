import '../polifylls';

import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode }  from '@angular/core';

import { AppModuleNgFactory } from './app.module.ngfactory';    // this will be created by angular

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);