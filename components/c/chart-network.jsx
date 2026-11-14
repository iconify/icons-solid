import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pbf3tac8b.css';
import '../../css/i/in1-w5bvf.css';
import '../../css/f/fubf0l-sd.css';
import '../../css/n/nh-ps30pw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pbf3tac8b"/><path class="in1-w5bvf"/><path class="fubf0l-sd"/><path class="nh-ps30pw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-network"} {...others} />);
}

export default Component;
