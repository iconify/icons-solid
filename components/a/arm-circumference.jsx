import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hb8cpl1hx.css';
import '../../css/e/em_jxkb7e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hb8cpl1hx"/><path class="em_jxkb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:arm-circumference"} {...others} />);
}

export default Component;
