import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pckaxha-v.css';
import '../../css/i/ijwbgek4s.css';
import '../../css/y/y_s7vvbss.css';
import '../../css/w/w1fn0ab-e.css';
import '../../css/q/q-ve4mbnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pckaxha-v"/><path class="ijwbgek4s"/><path class="y_s7vvbss"/><path class="w1fn0ab-e"/><path class="q-ve4mbnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-broken"} {...others} />);
}

export default Component;
