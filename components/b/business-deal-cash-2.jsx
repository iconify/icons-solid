import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/m/mblec-s1h.css';
import '../../css/n/n5r07bw7n.css';
import '../../css/f/f7elkckji.css';
import '../../css/x/xafl4sbvy.css';
import '../../css/a/awmn05b6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="mblec-s1h"/><path class="n5r07bw7n"/><path class="f7elkckji"/><path class="xafl4sbvy"/><path class="awmn05b6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:business-deal-cash-2"} {...others} />);
}

export default Component;
