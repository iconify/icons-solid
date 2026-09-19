import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nieziccsm.css';
import '../../css/s/s0m9qkbub.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="nieziccsm"/><path clip-rule="evenodd" class="s0m9qkbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:bell-alert"} {...others} />);
}

export default Component;
