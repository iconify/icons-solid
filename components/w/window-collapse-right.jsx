import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/f/f6r4u0dcm.css';
import '../../css/p/pd1h9oded.css';
import '../../css/e/eo6qbob6h.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="f6r4u0dcm"/><path class="pd1h9oded"/><path class="eo6qbob6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:window-collapse-right"} {...others} />);
}

export default Component;
