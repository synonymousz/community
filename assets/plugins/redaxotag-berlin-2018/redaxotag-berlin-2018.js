/**
 * REDAXO-Tag Berlin 2018
 *
 * - adds marker at co.up location
 * - adds control button to focus marker
 */

L.Map.addInitHook(function () {
    this.whenReady(function () {

        var entry = {
            'id': "redaxotag-berlin-2018",
            'name': "REDAXO-Tag Berlin 2018",
            'latitude': "52.5003820",
            'longitude': "13.4197300",
            'bio': "test",
            'image': "https://avatars1.githubusercontent.com/u/330560?s=200&v=4",
            'links': ["http://co-up.de/about.html"]
        }

        // add to directory
        directory.push(entry);

        // set popup content
        var content = '' +
            '<div class="user">';

        if (entry.image) {
            content += '' +
                '<div class="user__image">' +
                    '<img class="user__image-src" src="' + entry.image + '" alt="">' +
                '</div>';
        }

        content += '' +
                '<div class="user__data">';

        if (entry.name) {
            content += '' +
                    '<h2 class="user__name">' + entry.name + '</h2>';
        }

        if (entry.bio) {
            content += '' +
                    '<p class="user__bio">' + entry.bio + '</p>';
        }

        if (entry.links) {
            content += '' +
                    '<div class="user__links">' +
                        '<ul class="user__links-list">';

            for (var j = 0; j < 4; j++) {
                if (entry['links'][j]) {
                    var link = entry['links'][j];
                    var linkText = link.replace(/(http:\/\/|https:\/\/)/i, '');
                    content += '' +
                            '<li class="user__links-listitem"><a href="' + link + '">' + linkText + '</a></li>';
                }
            }

            content += '' +
                        '</ul>' +
                    '</div>';
        }

        content += '' +
                '</div>' +
            '</div>';

        // init popup
        var popup = L.popup({
            maxWidth: 450
        }).setContent(content);

        // add user ID
        // this helps us to determine popups
        popup.userID = entry.id;

        // init marker
        var marker = L.marker([entry.latitude, entry.longitude], {
            alt: entry.name
        }).bindPopup(popup);

        // add user ID
        // this helps us to determine markers
        marker.userID = entry.id;

        // add to markers
        marker.addTo(this.markers);
    });
});
