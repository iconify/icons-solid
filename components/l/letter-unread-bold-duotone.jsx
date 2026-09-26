import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hj4zhi7dw.css';
import '../../css/v/v-vhymbce.css';
import '../../css/h/h7cjiyxej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hj4zhi7dw"/><path class="v-vhymbce"/><path class="h7cjiyxej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-unread-bold-duotone"} {...others} />);
}

export default Component;
