import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwrrgdbrw.css';
import '../../css/z/zr8q-slph.css';
import '../../css/q/q52lk8fxx.css';
import '../../css/j/j8wurj_cw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gwrrgdbrw"/><path class="zr8q-slph"/><path class="q52lk8fxx"/><path class="j8wurj_cw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-outline"} {...others} />);
}

export default Component;
