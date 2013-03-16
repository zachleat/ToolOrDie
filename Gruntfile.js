/*global module:false*/
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Project configuration.
	grunt.initConfig({
		concat: {
			jsdist: {
				src: ['js/global.js'],
				dest: 'js/toolordie.js'
			},
			cssdist: {
				src: ['css/global.css'],
				dest: 'css/toolordie.css'
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/toolordie.min.js': ['js/toolordie.js']
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'css/toolordie.min.css': ['css/toolordie.css']
				}
			}
		},
		watch: {
			files: ['js/*, css/*'],
			tasks: 'lint concat'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {}
		},
		uglify: {}
	});

	// Default task.
	grunt.registerTask('default', ['jshint', 'concat', 'cssmin', 'uglify']);

};
