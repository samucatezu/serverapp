(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/samucatezu/IdeaProjects/servermanagerapp/serverapp/src/main.ts */"zUnb");


/***/ }),

/***/ "1liP":
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-notifier */ "SxM1");



class NotificationService {
    constructor(notifierService) {
        this.notifier = notifierService;
    }
    onDefault(message) {
        this.notifier.notify(Type.DEFAULT, message);
    }
    onSuccess(message) {
        this.notifier.notify(Type.SUCCESS, message);
    }
    onInfo(message) {
        this.notifier.notify(Type.INFO, message);
    }
    onWarning(message) {
        this.notifier.notify(Type.WARNING, message);
    }
    onError(message) {
        this.notifier.notify(Type.ERROR, message);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"] }]; }, null); })();
var Type;
(function (Type) {
    Type["DEFAULT"] = "default";
    Type["INFO"] = "info";
    Type["SUCCESS"] = "success";
    Type["WARNING"] = "warning";
    Type["ERROR"] = "error";
})(Type || (Type = {}));
;


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enum/data-state.enum */ "WFyN");
/* harmony import */ var _enum_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enum/status.enum */ "fkPJ");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/server.service */ "r28Q");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/notification.service */ "1liP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "SxM1");











function AppComponent_ng_container_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_25_ng_container_2_tbody_20_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uE328");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_25_ng_container_2_tbody_20_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 49);
} }
const _c0 = function (a0) { return [a0]; };
function AppComponent_ng_container_25_ng_container_2_tbody_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_25_ng_container_2_tbody_20_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const server_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.pingServer(server_r10.ipAddress); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_ng_container_25_ng_container_2_tbody_20_i_17_Template, 2, 0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_ng_container_25_ng_container_2_tbody_20_i_20_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_25_ng_container_2_tbody_20_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const server_r10 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.deleteServer(server_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\uE872");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const server_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", server_r10.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", server_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](server_r10.ipAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](server_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](server_r10.memory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](server_r10.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, server_r10.status === ctx_r9.Status.SERVER_UP ? " badge-success" : " badge-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", server_r10.status === ctx_r9.Status.SERVER_UP ? "SERVER UP" : "SERVER DOWN", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 10, ctx_r9.filterStatus$) === "" || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 12, ctx_r9.filterStatus$) !== server_r10.ipAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 14, ctx_r9.filterStatus$) === server_r10.ipAddress);
} }
function AppComponent_ng_container_25_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "IP Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Memory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_ng_container_25_ng_container_2_tbody_20_Template, 26, 18, "tbody", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const appState_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", appState_r5.appData.data.servers);
} }
function AppComponent_ng_container_25_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const appState_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", appState_r5.error, " ");
} }
function AppComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_25_ng_container_1_Template, 3, 0, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_25_ng_container_2_Template, 21, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_25_ng_container_3_Template, 3, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const appState_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", appState_r5.dataState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.DataState.LOADING_STATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.DataState.LOADED_STATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.DataState.ERROR_STATE);
} }
function AppComponent_i_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 51);
} }
function AppComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(serverService, notifier) {
        this.serverService = serverService;
        this.notifier = notifier;
        this.DataState = _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"];
        this.Status = _enum_status_enum__WEBPACK_IMPORTED_MODULE_4__["Status"];
        this.filterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.filterStatus$ = this.filterSubject.asObservable();
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isLoading$ = this.isLoading.asObservable();
    }
    ngOnInit() {
        this.appState$ = this.serverService.servers$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.notifier.onDefault(response.message);
            this.dataSubject.next(response);
            return { dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: Object.assign(Object.assign({}, response), { data: { servers: response.data.servers.reverse() } }) };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADING_STATE }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.notifier.onError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].ERROR_STATE, error });
        }));
    }
    pingServer(ipAddress) {
        this.filterSubject.next(ipAddress);
        this.appState$ = this.serverService.ping$(ipAddress)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            const index = this.dataSubject.value.data.servers.findIndex(server => server.id === response.data.server.id);
            this.dataSubject.value.data.servers[index] = response.data.server;
            this.notifier.onDefault(response.message);
            this.filterSubject.next('');
            return { dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: this.dataSubject.value };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: this.dataSubject.value }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.filterSubject.next('');
            this.notifier.onError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].ERROR_STATE, error });
        }));
    }
    saveServer(serverForm) {
        this.isLoading.next(true);
        this.appState$ = this.serverService.save$(serverForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.dataSubject.next(Object.assign(Object.assign({}, response), { data: { servers: [response.data.server, ...this.dataSubject.value.data.servers] } }));
            this.notifier.onDefault(response.message);
            document.getElementById('closeModal').click();
            this.isLoading.next(false);
            serverForm.resetForm({ status: this.Status.SERVER_DOWN });
            return { dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: this.dataSubject.value };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: this.dataSubject.value }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.isLoading.next(false);
            this.notifier.onError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].ERROR_STATE, error });
        }));
    }
    filterServers(status) {
        this.appState$ = this.serverService.filter$(status, this.dataSubject.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.notifier.onDefault(response.message);
            return { dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: response };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: this.dataSubject.value }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.notifier.onError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].ERROR_STATE, error });
        }));
    }
    deleteServer(server) {
        this.appState$ = this.serverService.delete$(server.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.dataSubject.next(Object.assign(Object.assign({}, response), { data: { servers: this.dataSubject.value.data.servers.filter(s => s.id !== server.id) } }));
            this.notifier.onDefault(response.message);
            return { dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: this.dataSubject.value };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].LOADED_STATE, appData: this.dataSubject.value }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            this.notifier.onError(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ dataState: _enum_data_state_enum__WEBPACK_IMPORTED_MODULE_3__["DataState"].ERROR_STATE, error });
        }));
    }
    printReport() {
        this.notifier.onDefault('Report downloaded');
        // window.print();
        let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
        let tableSelect = document.getElementById('servers');
        let tableHtml = tableSelect.outerHTML.replace(/ /g, '%20');
        let downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);
        downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
        downloadLink.download = 'server-report.xls';
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 77, vars: 15, consts: [[1, "container-xl"], [1, "table-responsive"], [1, "table-wrapper"], [1, "table-title"], [1, "row"], [1, "col-sm-6"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["href", "#addEmployeeModal", "data-toggle", "modal", 1, "btn", "btn-success"], [1, "material-icons"], ["name", "status", "ngModel", "ALL", 1, "btn", "btn-info", 2, "height", "32.91px", 3, "ngModelChange"], ["value", "ALL"], ["value", "SERVER_UP"], ["value", "SERVER_DOWN"], [3, "ngSwitch", 4, "ngIf"], ["id", "addEmployeeModal", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [3, "ngSubmit"], ["serverForm", "ngForm"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body"], [1, "form-group"], ["type", "text", "ngModel", "", "name", "ipAddress", "required", "", 1, "form-control"], ["type", "text", "ngModel", "", "name", "name", "required", "", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-6"], ["type", "text", "ngModel", "", "name", "memory", "required", "", 1, "form-control"], ["type", "text", "ngModel", "", "name", "type", "required", "", 1, "form-control"], ["name", "status", "ngModel", "SERVER_DOWN", "name", "status", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "id", "closeModal", "data-dismiss", "modal", 1, "btn", "btn-warning"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "col-md-12", "single-note-item", "text-center"], ["role", "status", 1, "spinner-border", "text-info"], ["id", "servers", 1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], ["width", "40", "height", "40", 3, "src", "alt"], [1, "badge", 3, "ngClass"], [2, "cursor", "pointer", 3, "click"], ["class", "material-icons", "title", "Ping server", 4, "ngIf"], ["class", "fa fa-spinner fa-spin", "style", "font-size:24px", 4, "ngIf"], ["data-toggle", "modal", 1, "delete", 2, "cursor", "pointer", 3, "click"], ["data-toggle", "tooltip", "title", "Delete", 1, "material-icons"], ["title", "Ping server", 1, "material-icons"], [1, "fa", "fa-spinner", "fa-spin", 2, "font-size", "24px"], [1, "alert-danger"], [1, "fas", "fa-spinner", "fa-spin"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manage Servers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.printReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Print Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\uE147");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "New Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_17_listener($event) { return ctx.filterServers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SERVER UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SERVER DOWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_ng_container_25_Template, 4, 4, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.saveServer(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Memory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "SERVER UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "SERVER DOWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AppComponent_i_70_Template, 1, 0, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AppComponent_span_72_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AppComponent_span_74_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "notifier-container");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 5, ctx.appState$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 7, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 9, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 11, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 13, ctx.isLoading$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["body[_ngcontent-%COMP%] {\n  color: #566787;\n  background: #f5f5f5;\n  font-family: 'Overpass', serif;\n  font-size: 13px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px 25px;\n  border-radius: 3px;\n  min-width: 1000px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n.table-title[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  background: #074c68;\n  color: #fff;\n  padding: 16px 30px;\n  min-width: 100%;\n  margin: -20px -25px 10px;\n  border-radius: 3px 3px 0 0;\n}\n\n.table-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 24px;\n}\n\n.table-title[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  font-size: 13px;\n  border: none;\n  min-width: 50px;\n  border-radius: 2px;\n  border: none;\n  outline: none !important;\n  margin-left: 10px;\n}\n\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 21px;\n  margin-right: 5px;\n}\n\n.table-title[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 2px;\n}\n\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: #e9e9e9;\n  padding: 12px 15px;\n  vertical-align: middle;\n}\n\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 60px;\n}\n\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\n\ntable.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: #fcfcfc;\n}\n\ntable.table-striped.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   i[_ngcontent-%COMP%] {\n  opacity: 0.9;\n  font-size: 22px;\n  margin: 0 5px;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #566787;\n  display: inline-block;\n  text-decoration: none;\n  outline: none !important;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2196F3;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.edit[_ngcontent-%COMP%] {\n  color: #FFC107;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a.delete[_ngcontent-%COMP%] {\n  color: #F44336;\n}\n\ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\ntable.table[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0 0 5px;\n}\n\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 13px;\n  min-width: 30px;\n  min-height: 30px;\n  color: #999;\n  margin: 0 2px;\n  line-height: 30px;\n  border-radius: 2px !important;\n  text-align: center;\n  padding: 0 6px;\n}\n\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a.page-link[_ngcontent-%COMP%] {\n  background: #03A9F4;\n}\n\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0397d6;\n}\n\n.pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 6px\n}\n\n.hint-text[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n\n\n.custom-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  margin: 5px 0 0 3px;\n  z-index: 9;\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  width: 18px;\n  height: 18px;\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  content: '';\n  margin-right: 10px;\n  display: inline-block;\n  vertical-align: text-top;\n  background: white;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n  box-sizing: border-box;\n  z-index: 2;\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  left: 6px;\n  top: 3px;\n  width: 6px;\n  height: 11px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: inherit;\n  z-index: 3;\n  transform: rotateZ(45deg);\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before {\n  border-color: #03A9F4;\n  background: #03A9F4;\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after {\n  border-color: #fff;\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]:before {\n  color: #b8b8b8;\n  cursor: auto;\n  box-shadow: none;\n  background: #ddd;\n}\n\n\n\n.modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  font-size: 14px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  background: #ecf0f1;\n  border-radius: 0 0 3px 3px;\n}\n\n.modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.modal[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: none;\n  border-color: #dddddd;\n}\n\n.modal[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\n.modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  min-width: 100px;\n}\n\n.modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgY29sb3I6ICM1NjY3ODc7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MnLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cblxuLnRhYmxlLXRpdGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMwNzRjNjg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4IDMwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAtMjBweCAtMjVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbn1cblxuLnRhYmxlLXRpdGxlIGgyIHtcbiAgbWFyZ2luOiA1cHggMCAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi50YWJsZS10aXRsZSAuYnRuLWdyb3VwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGFibGUtdGl0bGUgLmJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiBub25lO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGFibGUtdGl0bGUgLmJ0biBpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi50YWJsZS10aXRsZSAuYnRuIHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG50YWJsZS50YWJsZSB0ciB0aCxcbnRhYmxlLnRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTllOWU5O1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnRhYmxlLnRhYmxlIHRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbnRhYmxlLnRhYmxlIHRyIHRoOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbnRhYmxlLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbnRhYmxlLnRhYmxlLXN0cmlwZWQudGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG50YWJsZS50YWJsZSB0aCBpIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDAgNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRhYmxlLnRhYmxlIHRkOmxhc3QtY2hpbGQgaSB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG50YWJsZS50YWJsZSB0ZCBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTY2Nzg3O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50YWJsZS50YWJsZSB0ZCBhOmhvdmVyIHtcbiAgY29sb3I6ICMyMTk2RjM7XG59XG5cbnRhYmxlLnRhYmxlIHRkIGEuZWRpdCB7XG4gIGNvbG9yOiAjRkZDMTA3O1xufVxuXG50YWJsZS50YWJsZSB0ZCBhLmRlbGV0ZSB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xufVxuXG50YWJsZS50YWJsZSB0ZCBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG50YWJsZS50YWJsZSAuYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgMCA1cHg7XG59XG5cbi5wYWdpbmF0aW9uIGxpIGEge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luOiAwIDJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuXG4ucGFnaW5hdGlvbiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5wYWdpbmF0aW9uIGxpLmFjdGl2ZSBhLFxuLnBhZ2luYXRpb24gbGkuYWN0aXZlIGEucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZDogIzAzQTlGNDtcbn1cblxuLnBhZ2luYXRpb24gbGkuYWN0aXZlIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDM5N2Q2O1xufVxuXG4ucGFnaW5hdGlvbiBsaS5kaXNhYmxlZCBpIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5wYWdpbmF0aW9uIGxpIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA2cHhcbn1cblxuLmhpbnQtdGV4dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8qIEN1c3RvbSBjaGVja2JveCAqL1xuLmN1c3RvbS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogNXB4IDAgMCAzcHg7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cblxuLmN1c3RvbS1jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMjtcbn1cblxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiAzcHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTFweDtcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHotaW5kZXg6IDM7XG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDNBOUY0O1xuICBiYWNrZ3JvdW5kOiAjMDNBOUY0O1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCtsYWJlbDpiZWZvcmUge1xuICBjb2xvcjogI2I4YjhiODtcbiAgY3Vyc29yOiBhdXRvO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4vKiBNb2RhbCBzdHlsZXMgKi9cbi5tb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLm1vZGFsIC5tb2RhbC1oZWFkZXIsXG4ubW9kYWwgLm1vZGFsLWJvZHksXG4ubW9kYWwgLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxuLm1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tb2RhbCAubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2VjZjBmMTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG59XG5cbi5tb2RhbCAubW9kYWwtdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tb2RhbCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5tb2RhbCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4ubW9kYWwgLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLm1vZGFsIGZvcm0gbGFiZWwge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _service_server_service__WEBPACK_IMPORTED_MODULE_5__["ServerService"] }, { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "WFyN":
/*!*****************************************!*\
  !*** ./src/app/enum/data-state.enum.ts ***!
  \*****************************************/
/*! exports provided: DataState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataState", function() { return DataState; });
var DataState;
(function (DataState) {
    DataState["LOADING_STATE"] = "LOADING_STATE";
    DataState["LOADED_STATE"] = "LOADED_STATE";
    DataState["ERROR_STATE"] = "ERROR_STATE";
})(DataState || (DataState = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _notification_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.module */ "kWl6");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _notification_module__WEBPACK_IMPORTED_MODULE_6__["NotificationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _notification_module__WEBPACK_IMPORTED_MODULE_6__["NotificationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _notification_module__WEBPACK_IMPORTED_MODULE_6__["NotificationModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fkPJ":
/*!*************************************!*\
  !*** ./src/app/enum/status.enum.ts ***!
  \*************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status;
(function (Status) {
    Status["ALL"] = "ALL";
    Status["SERVER_UP"] = "SERVER_UP";
    Status["SERVER_DOWN"] = "SERVER_DOWN";
})(Status || (Status = {}));


/***/ }),

/***/ "kWl6":
/*!****************************************!*\
  !*** ./src/app/notification.module.ts ***!
  \****************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-notifier */ "SxM1");




const customNotifierOptions = {
    position: {
        horizontal: {
            position: 'left',
            distance: 150
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
class NotificationModule {
}
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationModule_Factory(t) { return new (t || NotificationModule)(); }, imports: [[angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"].withConfig(customNotifierOptions)], angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationModule, { imports: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"]], exports: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"].withConfig(customNotifierOptions)],
                exports: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "r28Q":
/*!*******************************************!*\
  !*** ./src/app/service/server.service.ts ***!
  \*******************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _enum_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enum/status.enum */ "fkPJ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");






class ServerService {
    constructor(http) {
        this.http = http;
        // private readonly apiUrl = 'https://server-manager-samucatezu.herokuapp.com';
        // private readonly apiUrl = 'http://localhost:8080';
        this.apiUrl = 'http://servermanagerbackend-env-1.eba-uu28akxc.us-east-1.elasticbeanstalk.com/';
        this.servers$ = this.http.get(`${this.apiUrl}/server/list`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        this.save$ = (server) => this.http.post(`${this.apiUrl}/server/save`, server)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        this.ping$ = (ipAddress) => this.http.get(`${this.apiUrl}/server/ping/${ipAddress}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        this.filter$ = (status, response) => new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](suscriber => {
            console.log(response);
            suscriber.next(status === _enum_status_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].ALL ? Object.assign(Object.assign({}, response), { message: `Servers filtered by ${status} status` }) : Object.assign(Object.assign({}, response), { message: response.data.servers
                    .filter(server => server.status === status).length > 0 ? `Servers filtered by 
          ${status === _enum_status_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].SERVER_UP ? 'SERVER UP'
                    : 'SERVER DOWN'} status` : `No servers of ${status} found`, data: {
                    servers: response.data.servers
                        .filter(server => server.status === status)
                } }));
            suscriber.complete();
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        this.delete$ = (serverId) => this.http.delete(`${this.apiUrl}/server/delete/${serverId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(`An error occurred - Error code: ${error.status}`);
    }
}
ServerService.ɵfac = function ServerService_Factory(t) { return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ServerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServerService, factory: ServerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map