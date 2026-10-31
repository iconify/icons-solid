import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kncm1tx0o.css';
import '../../css/m/mob2hr_-u.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/m/mvz-u7b1a.css';
import '../../css/g/g7tecfbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kncm1tx0o"/><path class="mob2hr_-u wm-shine"/><path class="psyzc1_dw wm-k"/><path class="mvz-u7b1a wm-a"/><path class="g7tecfbpx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wand-sparkles"} {...others} />);
}

export default Component;
