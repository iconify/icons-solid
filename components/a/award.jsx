import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yt_dr8b2a.css';
import '../../css/q/qfvg320_x.css';
import '../../css/b/bm78b1nsv.css';
import '../../css/n/n9em5fasb.css';
import '../../css/v/vjo9htblu.css';
import '../../css/j/j1oi_wb0q.css';
import '../../css/g/gcdcdwhty.css';
import '../../css/t/t33dc4kan.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yt_dr8b2a"/><path class="qfvg320_x"/><path class="bm78b1nsv wm-shine"/><path class="n9em5fasb wm-k"/><path class="vjo9htblu wm-a"/><path class="j1oi_wb0q"/><path class="gcdcdwhty"/><path class="t33dc4kan wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:award"} {...others} />);
}

export default Component;
