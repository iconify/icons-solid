import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffshe1a3t.css';
import '../../css/e/e00cwmbhu.css';
import '../../css/z/z3vkyzblr.css';
import '../../css/r/r98e9ibln.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ffshe1a3t"/><path class="e00cwmbhu"/><path class="z3vkyzblr"/><path class="r98e9ibln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:calendar-star"} {...others} />);
}

export default Component;
