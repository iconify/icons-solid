import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vn9m1j_jt.css';
import '../../css/q/qg2qrmbrg.css';
import '../../css/n/np3qu_b3h.css';
import '../../css/v/v-hllac-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vn9m1j_jt"/><path class="qg2qrmbrg"/><path class="np3qu_b3h"/><path class="v-hllac-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-stars-bold"} {...others} />);
}

export default Component;
