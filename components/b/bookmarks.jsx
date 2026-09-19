import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_npduomz.css';
import '../../css/p/pa7eyybxj.css';
import '../../css/i/i9odujbib.css';
import '../../css/i/i0f6qcbhq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j_npduomz"/><path class="pa7eyybxj"/><path clip-rule="evenodd" class="i9odujbib"/><path class="i0f6qcbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:bookmarks"} {...others} />);
}

export default Component;
