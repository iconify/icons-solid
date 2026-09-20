import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cjcjyfbkq.css';
import '../../css/t/t4_mbfm4h.css';
import '../../css/m/m-f01abwr.css';
import '../../css/m/m8xh3tzip.css';
import '../../css/s/slk4sp16n.css';
import '../../css/d/dicainbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cjcjyfbkq"/><path class="t4_mbfm4h"/><path class="m-f01abwr"/><path class="m8xh3tzip"/><path class="slk4sp16n"/><path class="dicainbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-battery-broken"} {...others} />);
}

export default Component;
