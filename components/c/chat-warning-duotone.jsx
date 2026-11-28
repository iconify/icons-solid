import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/que2f03vs.css';
import '../../css/w/w3c7l5w_y.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="que2f03vs"/><path class="w3c7l5w_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:chat-warning-duotone"} {...others} />);
}

export default Component;
