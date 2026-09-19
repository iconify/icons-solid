import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_q9h-uxq.css';
import '../../css/g/gi9kwacwi.css';
import '../../css/g/ggqrbdggc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d_q9h-uxq"/><path class="gi9kwacwi"/><path class="ggqrbdggc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:canoe-2-duo"} {...others} />);
}

export default Component;
