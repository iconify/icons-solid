import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_zwiwbff.css';
import '../../css/p/p7502bdtu.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="q_zwiwbff"/><path class="p7502bdtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:calendar-arrow-clockwise-duotone"} {...others} />);
}

export default Component;
