import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk1ai1w-y.css';
import '../../css/q/q54v-xdop.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="nk1ai1w-y"/><path class="q54v-xdop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:user-slash-duotone"} {...others} />);
}

export default Component;
