import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-vi-cgti.css';
import '../../css/j/jkij7ptex.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="v-vi-cgti"/><path class="jkij7ptex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-top-right-on-square-16-solid"} {...others} />);
}

export default Component;
