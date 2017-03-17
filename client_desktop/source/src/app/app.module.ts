
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { MaterialModule }       from '@angular/material';
import { FlexLayoutModule }     from '@angular/flex-layout';

import 'hammerjs';

import { AppRouting }           from './app.routing';

import { RouteService }         from '../services/route.service';
import { LayoutService }        from '../services/layout.service';
import { SocketService }        from '../services/socket.service';

import { DataframeBase }        from '../services/dataframe.base';
import { DataframeAccount }     from '../services/dataframe.account.service';

import { AppComponent }         from './app.component';

import { HeaderComponent }      from '../pages/header/header.component';
import { FooterComponent }      from '../pages/footer/footer.component';
import { SidebarComponent }     from '../pages/sidebar/sidebar.component';

import { LoginComponent }       from '../pages/login/login.component';
import { DashboardComponent }   from '../pages/dashboard/dashboard.component';
import { MailComponent }        from '../pages/mail/mail.component';
import { FlagComponent }        from '../pages/flag/flag.component';
import { SettingsComponent }    from '../pages/settings/settings.component';

@NgModule (
{
    declarations    :
    [
        AppComponent
    ,   HeaderComponent
    ,   FooterComponent
    ,   SidebarComponent

    ,   LoginComponent
    ,   DashboardComponent
    ,   MailComponent
    ,   FlagComponent
    ,   SettingsComponent
    ],
    imports         :
    [
        BrowserModule
    ,   FormsModule
    ,   HttpModule
    ,   MaterialModule
    ,   FlexLayoutModule
    ,   AppRouting
    ],
    providers       :
    [
        RouteService
    ,   LayoutService
    ,   SocketService
    ,   DataframeBase
    ,   DataframeAccount
    ],
    bootstrap       :
    [
        AppComponent
    ]
} )
export class AppModule { }
