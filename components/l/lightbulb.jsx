import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjccpsblt.css';
import '../../css/g/gzjg0w8dc.css';
import '../../css/n/ndv-dackp.css';
import '../../css/q/q3a_xzb3l.css';
import '../../css/t/tgsm477ip.css';
import '../../css/i/igv4_7_ix.css';
import '../../css/r/rl3f-nsch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rjccpsblt wm-k"/><path class="gzjg0w8dc wm-deco"/><path class="ndv-dackp wm-k"/><path class="q3a_xzb3l wm-k"/><path class="tgsm477ip wm-shadow"/><path class="igv4_7_ix wm-shine"/><path class="rl3f-nsch wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:lightbulb"} {...others} />);
}

export default Component;
