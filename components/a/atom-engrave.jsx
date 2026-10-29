import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w2b8v5scy.css';
import '../../css/r/rrys0abxb.css';
import '../../css/r/rwcpqoa8u.css';
import '../../css/u/uxv7f4b_y.css';
import '../../css/y/y6pe4bckh.css';
import '../../css/c/cmpkjnb0y.css';
import '../../css/d/dx7k_3bea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w2b8v5scy wm-k"/><path class="rrys0abxb wm-a"/><path class="rwcpqoa8u wm-shadow"/><path class="uxv7f4b_y wm-k"/><path class="wm-k y6pe4bckh"/><path class="cmpkjnb0y wm-k"/><path class="dx7k_3bea wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:atom-engrave"} {...others} />);
}

export default Component;
