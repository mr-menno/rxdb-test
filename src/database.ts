import { addRxPlugin, createRxDatabase, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
addRxPlugin(RxDBQueryBuilderPlugin);


// export type InitDatabase = () => Promise<RxDatabase>;

export const initDatabase = async () => {
    const db = await createRxDatabase({
        name: 'testdb',
        storage: getRxStorageDexie(),
    });
    return db;
}

// export const initDatabase;