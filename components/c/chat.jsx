import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lm511ce7e.css';
import '../../css/t/tzovut_xs.css';
import '../../css/j/j0x6rylzr.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="lm511ce7e"/><path class="tzovut_xs"/><path class="j0x6rylzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:chat"} {...others} />);
}

export default Component;
