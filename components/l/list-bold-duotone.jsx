import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6tl7ybcd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qigovot_c.css';
import '../../css/v/v-s_f4e2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t6tl7ybcd"/><g class="mc2zb0bvp"><path class="qigovot_c"/><path class="v-s_f4e2d"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-bold-duotone"} {...others} />);
}

export default Component;
