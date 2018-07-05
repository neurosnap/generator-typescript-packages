import { combineReducers, Reducer } from 'redux';

import use from 'redux-package-loader';
import sagaCreator from 'redux-saga-creator';

import { State } from './types';

const corePackages = <any>[
];

const packages = use(corePackages);
const rootReducer: Reducer<State> = combineReducers(packages.reducers);
const rootSaga = sagaCreator(packages.sagas);

export { packages, rootReducer, rootSaga };