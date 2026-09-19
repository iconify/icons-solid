import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yp71w5j_f.css';
import '../../css/m/m24p57kbj.css';
import '../../css/y/ysyj_mb-h.css';
import '../../css/c/cs2xpclua.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yp71w5j_f"/><path clip-rule="evenodd" class="m24p57kbj"/><path class="ysyj_mb-h"/><path clip-rule="evenodd" class="cs2xpclua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-warn-outline"} {...others} />);
}

export default Component;
