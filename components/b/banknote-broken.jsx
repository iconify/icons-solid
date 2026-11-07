import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4hg72bzc.css';
import '../../css/i/i46k68_po.css';
import '../../css/e/e710k_wmh.css';
import '../../css/z/zu7_43bri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w4hg72bzc"/><path class="i46k68_po"/><path class="e710k_wmh"/><path class="zu7_43bri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-broken"} {...others} />);
}

export default Component;
