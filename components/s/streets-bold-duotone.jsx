import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcaaw--es.css';
import '../../css/k/km6q1bmez.css';
import '../../css/u/ut5j5mboq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fcaaw--es"/><path class="km6q1bmez"/><path class="ut5j5mboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-bold-duotone"} {...others} />);
}

export default Component;
