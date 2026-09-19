import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zg2o2y4jg.css';
import '../../css/e/en2yxb8bj.css';
import '../../css/v/vy5ihzwxr.css';
import '../../css/c/ccw6g8mcq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="zg2o2y4jg"/><path clip-rule="evenodd" class="en2yxb8bj"/><path class="vy5ihzwxr"/><path clip-rule="evenodd" class="ccw6g8mcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:child-program"} {...others} />);
}

export default Component;
