import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k2khccbcd.css';
import '../../css/f/fenutzb3t.css';
import '../../css/h/h14wliw7l.css';
import '../../css/e/e9fgc-b_d.css';
import '../../css/i/i9nr5tbkn.css';
import '../../css/m/m5dtgkbek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k2khccbcd"/><path class="fenutzb3t"/><path class="h14wliw7l"/><path class="e9fgc-b_d"/><path class="i9nr5tbkn"/><path class="m5dtgkbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-broken"} {...others} />);
}

export default Component;
