import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/i72f4jbac.css';
import '../../css/s/sqmt6kqof.css';
import '../../css/s/sfy1x5b8o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG39R8uT2v"><g class="aql7dnt-u"><path class="i72f4jbac"/><path class="sqmt6kqof"/><path class="sfy1x5b8o"/></g></mask></defs><path mask="url(#SVG39R8uT2v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lipstick"} {...others} />);
}

export default Component;
