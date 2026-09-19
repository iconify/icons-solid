import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/midqvbcgl.css';
import '../../css/c/c0gmrobzl.css';
import '../../css/r/r47dkf1hc.css';
import '../../css/z/zd46sgbja.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpWVYQcrI"><g class="aql7dnt-u"><path class="midqvbcgl"/><path class="c0gmrobzl"/><path class="r47dkf1hc"/><path class="zd46sgbja"/></g></mask></defs><path mask="url(#SVGpWVYQcrI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:retro-bag"} {...others} />);
}

export default Component;
