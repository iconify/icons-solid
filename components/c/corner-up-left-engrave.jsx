import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_anthadu.css';
import '../../css/p/p1zj69bwt.css';
import '../../css/w/w5y8lebkd.css';
import '../../css/a/a0j3l762m.css';
import '../../css/q/qum0vnbsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u_anthadu wm-k"/><path class="p1zj69bwt wm-a"/><path class="w5y8lebkd wm-shadow"/><path class="a0j3l762m wm-k"/><path class="qum0vnbsk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-up-left-engrave"} {...others} />);
}

export default Component;
