import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oy-2x1b_m.css';
import '../../css/m/m74glxbbu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="oy-2x1b_m"/><path class="m74glxbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:scissors"} {...others} />);
}

export default Component;
