import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l64754odp.css';
import '../../css/f/fidd3xbvx.css';
import '../../css/d/dyu0cp5on.css';
import '../../css/u/ub6dtb6xc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l64754odp"/><path class="fidd3xbvx"/><path class="dyu0cp5on"/><path class="ub6dtb6xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
