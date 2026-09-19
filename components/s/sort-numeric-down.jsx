import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qddtombcw.css';
import '../../css/h/h4ootnb0e.css';
import '../../css/z/z3-8uyfzn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="qddtombcw"/><path class="h4ootnb0e"/><path class="z3-8uyfzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sort-numeric-down"} {...others} />);
}

export default Component;
