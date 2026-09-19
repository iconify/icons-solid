import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/y/ysv6qubop.css';
import '../../css/v/vp9y1nkzk.css';
import '../../css/f/fy889v-sw.css';
import '../../css/x/x5l44wkxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="ysv6qubop"/><path class="vp9y1nkzk"/><path class="fy889v-sw"/><path class="x5l44wkxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:calculator"} {...others} />);
}

export default Component;
