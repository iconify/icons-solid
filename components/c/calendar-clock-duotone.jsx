import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_zwiwbff.css';
import '../../css/h/h3ie09b6c.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="q_zwiwbff"/><path class="h3ie09b6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:calendar-clock-duotone"} {...others} />);
}

export default Component;
