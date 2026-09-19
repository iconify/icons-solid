import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y7mlxub_d.css';
import '../../css/w/wnpbb5hga.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="y7mlxub_d"/><path clip-rule="evenodd" class="wnpbb5hga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:device-phone-mobile"} {...others} />);
}

export default Component;
