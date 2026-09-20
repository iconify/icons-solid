import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wvc8_zo-w.css';
import '../../css/u/us_lcey2a.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="wvc8_zo-w"/><path class="us_lcey2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:download"} {...others} />);
}

export default Component;
