exports.up = function (knex) {
	return knex.schema
		.createTable('Store', (table) => {
			table.increments('id').primary();
			table.string('name').notNullable();
			table.string('shortName').notNullable();
			table.text('link').notNullable();
			table.string('domain').notNullable();
			table.string('status').notNullable();
			table.integer('rating').nullable();
			table.timestamp('createdAt').nullable();
			table.timestamp('updatedAt').nullable();
			table.timestamp('deletedAt').nullable();
		})
		.createTable('Brand', (table) => {
			table.increments('id').primary();
			table.string('name').notNullable().defaultTo('');
			table.string('aliases').notNullable().defaultTo('');
			table.string('status').notNullable().defaultTo('');
			table.timestamp('createdAt').nullable();
			table.timestamp('updatedAt').nullable();
			table.timestamp('deletedAt').nullable();
		})
		.createTable('Category', (table) => {
			table.increments('id').primary();
			table.string('name').notNullable().defaultTo('');
			table.string('shortName').notNullable().defaultTo('');
			table.string('pluralName').notNullable().defaultTo('');
			table.string('aliases').notNullable().defaultTo('');
			table.integer('parentId').notNullable().defaultTo(0);
			table.string('status').notNullable().defaultTo('');
			table.jsonb('metadata').notNullable().defaultTo('{}');
			table.timestamp('createdAt').nullable();
			table.timestamp('updatedAt').nullable();
			table.timestamp('deletedAt').nullable();

			table.unique('name');
			table.unique('shortName');
		})
		.createTable('BrandCategoryMap', (table) => {
			table.integer('brandId').notNullable().defaultTo(0);
			table.integer('categoryId').notNullable().defaultTo(0);
		})
		.createTable('User', (table) => {
			table.increments('id').primary();
			table.string('username').notNullable().defaultTo('');
			table.string('email').notNullable().defaultTo('');
			table.string('phone').notNullable().defaultTo('');
			table.string('password').notNullable().defaultTo('');
			table.timestamp('dateOfBirth').nullable();
			table.string('name').notNullable().defaultTo('');
			table.enum('status', ['active', 'banned']).notNullable().defaultTo('active');
			table.text('image').nullable();
			table.enum('gender', ['male', 'female', 'others']).notNullable().defaultTo('male');
			table.string('facebookId').notNullable().defaultTo('');
			table.string('twitterId').notNullable().defaultTo('');
			table.string('googlePlusId').notNullable().defaultTo('');
			table.string('smartprixId').notNullable().defaultTo('');
			table.string('country').notNullable().defaultTo('');
			table.string('timezone').notNullable().defaultTo('');
			table.timestamp('createdAt').nullable();
			table.timestamp('updatedAt').nullable();
			table.timestamp('deletedAt').nullable();
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('Store')
		.dropTableIfExists('Brand')
		.dropTableIfExists('Category')
		.dropTableIfExists('BrandCategoryMap');
};
