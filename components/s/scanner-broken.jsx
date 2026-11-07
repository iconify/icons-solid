import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vdsubobiu.css';
import '../../css/i/ijwbgek4s.css';
import '../../css/q/q9pwgx9_k.css';
import '../../css/w/w1fn0ab-e.css';
import '../../css/h/h60l1mbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vdsubobiu"/><path class="ijwbgek4s"/><path class="q9pwgx9_k"/><path class="w1fn0ab-e"/><path class="h60l1mbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-broken"} {...others} />);
}

export default Component;
