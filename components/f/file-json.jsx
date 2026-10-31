import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ay2i4ly5t.css';
import '../../css/p/p_umfntdc.css';
import '../../css/x/xlxw1xe_o.css';
import '../../css/r/rjufokmvr.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ay2i4ly5t wm-k"/><path class="p_umfntdc wm-shine"/><path class="wm-shine xlxw1xe_o"/><path class="rjufokmvr wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file-json"} {...others} />);
}

export default Component;
