import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taogqpb9g.css';
import '../../css/f/fq2i0fpuc.css';
import '../../css/f/frr67dw0i.css';
import '../../css/n/noodpccbe.css';
import '../../css/v/vhw97bcth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="taogqpb9g"/><path class="fq2i0fpuc"/><path class="frr67dw0i"/><path class="noodpccbe"/><path class="vhw97bcth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-check-broken"} {...others} />);
}

export default Component;
