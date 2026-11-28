import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_xi3ybdp.css';
import '../../css/y/yuu0t7b4c.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="g_xi3ybdp"/><path class="yuu0t7b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:rock-duotone"} {...others} />);
}

export default Component;
