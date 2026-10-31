import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n24cxcp_g.css';
import '../../css/j/jhcy9nbco.css';
import '../../css/p/px6tk1b_d.css';
import '../../css/s/s8gwjebyh.css';
import '../../css/w/wgawraqqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n24cxcp_g wm-shadow"/><path class="jhcy9nbco wm-shadow"/><path class="px6tk1b_d"/><path class="s8gwjebyh"/><path class="wgawraqqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:drumstick"} {...others} />);
}

export default Component;
