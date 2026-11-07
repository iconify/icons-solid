import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uz9iye4tk.css';
import '../../css/i/i2oi9shbo.css';
import '../../css/s/sdvb_kngq.css';
import '../../css/n/njaypgbkt.css';
import '../../css/j/jg20qzbix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uz9iye4tk"/><path class="i2oi9shbo"/><path class="sdvb_kngq"/><path class="njaypgbkt"/><path class="jg20qzbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-minimalistic-linear"} {...others} />);
}

export default Component;
