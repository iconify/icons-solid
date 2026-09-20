import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tnfby2q5d.css';
import '../../css/p/pu97ujszu.css';
import '../../css/d/d7egxzbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tnfby2q5d"/><path class="pu97ujszu"/><path class="d7egxzbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-charge-minimalistic-broken"} {...others} />);
}

export default Component;
