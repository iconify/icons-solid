import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/raucetsey.css';
import '../../css/z/zeiub32xo.css';
import '../../css/c/cnrqf_vbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="raucetsey"/><path class="zeiub32xo"/><path class="cnrqf_vbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-vertical-bold-duotone"} {...others} />);
}

export default Component;
