import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vjd6w4lsk.css';
import '../../css/e/e0y2b7bxn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="vjd6w4lsk"/><path class="e0y2b7bxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:lock-closed"} {...others} />);
}

export default Component;
