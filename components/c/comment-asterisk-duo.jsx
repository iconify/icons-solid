import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq3_8_bav.css';
import '../../css/x/xocq98voj.css';
import '../../css/x/xeu5cddlu.css';
import '../../css/d/dzdfpcczr.css';
import '../../css/m/m7m9t0bvj.css';
import '../../css/d/dlbhh2blg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qq3_8_bav"/><path class="xocq98voj"/><path class="xeu5cddlu"/><path class="dzdfpcczr"/><path class="m7m9t0bvj"/><path class="dlbhh2blg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-asterisk-duo"} {...others} />);
}

export default Component;
