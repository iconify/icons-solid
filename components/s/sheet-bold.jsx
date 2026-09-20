import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy9l_actj.css';
import '../../css/z/zb0alabul.css';
import '../../css/a/aqbeqobdq.css';
import '../../css/v/vm2--db7r.css';
import '../../css/z/z_8-xsu_j.css';
import '../../css/y/ys2ikbbnc.css';
import '../../css/a/a4df2246k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qy9l_actj"/><path class="zb0alabul"/><path class="aqbeqobdq"/><path class="vm2--db7r"/><path class="z_8-xsu_j"/><path class="ys2ikbbnc"/><path class="a4df2246k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sheet-bold"} {...others} />);
}

export default Component;
