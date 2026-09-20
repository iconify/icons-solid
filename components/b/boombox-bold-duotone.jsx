import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8y5cubeq.css';
import '../../css/y/yjfcq91so.css';
import '../../css/z/z_r3qhb9a.css';
import '../../css/b/btm1o_g-t.css';
import '../../css/p/ph9evu1-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z8y5cubeq"/><path class="yjfcq91so"/><path class="z_r3qhb9a"/><path class="btm1o_g-t"/><path class="ph9evu1-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:boombox-bold-duotone"} {...others} />);
}

export default Component;
