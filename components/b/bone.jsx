import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kp2ai-bkh.css';
import '../../css/q/qwg69vppk.css';
import '../../css/k/knkqxxa4k.css';
import '../../css/e/e2w6qmx-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxFF8ad7t" x1="9" x2="15" y1="2.08" y2="21.93" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGxFF8ad7t)" class="kp2ai-bkh"/><path class="qwg69vppk wm-shine"/><path class="knkqxxa4k wm-shine"/><path class="e2w6qmx-m wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:bone"} {...others} />);
}

export default Component;
