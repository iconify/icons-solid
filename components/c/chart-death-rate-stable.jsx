import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5eqa4bgt.css';
import '../../css/l/l-6s2cixh.css';
import '../../css/y/y0z3zppyt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="j5eqa4bgt"/><path clip-rule="evenodd" class="l-6s2cixh"/><path class="y0z3zppyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-death-rate-stable"} {...others} />);
}

export default Component;
