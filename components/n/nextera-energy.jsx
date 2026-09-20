import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-q4vd9uk.css';
import '../../css/i/ipro1v59i.css';

const viewBox = {"width":1705,"height":1413};
const content = `<g class="cuyn6tgcc"><path class="k-q4vd9uk"/><path class="ipro1v59i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:nextera-energy"} {...others} />);
}

export default Component;
