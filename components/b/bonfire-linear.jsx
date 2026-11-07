import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n6tc07bpg.css';
import '../../css/j/jwvedsvir.css';
import '../../css/s/sqy-cgo_l.css';
import '../../css/g/g6m793csp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n6tc07bpg"/><path class="jwvedsvir"/><path class="sqy-cgo_l"/><path class="g6m793csp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bonfire-linear"} {...others} />);
}

export default Component;
