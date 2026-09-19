import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_u5sdb8h.css';
import '../../css/n/no2l6bbzc.css';
import '../../css/h/hg3n9j_cg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="j_u5sdb8h"/><path class="no2l6bbzc"/><path class="hg3n9j_cg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-shrugging"} {...others} />);
}

export default Component;
