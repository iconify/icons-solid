import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/p8rbrlxyj.css';
import '../../css/u/ui3uycp9j.css';
import '../../css/t/tc8jmyben.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZ7ETxbEG"><g class="aql7dnt-u"><path class="p8rbrlxyj"/><path class="ui3uycp9j"/><path class="tc8jmyben"/></g></mask></defs><path mask="url(#SVGZ7ETxbEG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:turn-around"} {...others} />);
}

export default Component;
