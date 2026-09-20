import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ebhe4pyum.css';
import '../../css/f/fl5ee5btq.css';
import '../../css/l/lwe1zcbai.css';
import '../../css/e/eji_1n4ni.css';
import '../../css/k/kpfl4i9ug.css';
import '../../css/h/hvdt_7b8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ebhe4pyum"/><path clip-rule="evenodd" class="fl5ee5btq"/><path class="lwe1zcbai"/><path class="eji_1n4ni"/><path class="kpfl4i9ug"/><path class="hvdt_7b8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-money-bold"} {...others} />);
}

export default Component;
