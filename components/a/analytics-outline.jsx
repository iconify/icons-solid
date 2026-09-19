import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1t264bjm.css';
import '../../css/r/r-o9b9btm.css';
import '../../css/w/ws_4u_45s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y1t264bjm"/><path clip-rule="evenodd" class="r-o9b9btm"/><path class="ws_4u_45s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:analytics-outline"} {...others} />);
}

export default Component;
