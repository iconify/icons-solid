import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/ko35661_d.css';
import '../../css/p/pznbfkwvh.css';
import '../../css/d/dn4j-pb5x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOvFlObFj"><g class="aql7dnt-u"><path class="ko35661_d"/><path class="pznbfkwvh"/><path class="dn4j-pb5x"/></g></mask></defs><path mask="url(#SVGOvFlObFj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:four-point-connection"} {...others} />);
}

export default Component;
