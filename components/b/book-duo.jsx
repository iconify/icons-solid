import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z67_wkbeg.css';
import '../../css/q/qvp7rrb8e.css';
import '../../css/d/dpcaptc_x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z67_wkbeg"/><path class="qvp7rrb8e"/><path class="dpcaptc_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-duo"} {...others} />);
}

export default Component;
