import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/flcmoz7dz.css';
import '../../css/c/c21dkybzf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="flcmoz7dz"/><path class="c21dkybzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:chevrons-right"} {...others} />);
}

export default Component;
