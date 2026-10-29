import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qva59y26e.css';
import '../../css/c/cqk-22xfz.css';
import '../../css/q/qefkrwbtk.css';
import '../../css/p/pf1dxhdwb.css';
import '../../css/h/hoiljbbrs.css';
import '../../css/b/bu8vrqwsz.css';
import '../../css/f/f4nz1xais.css';
import '../../css/j/jv6xnxbsn.css';
import '../../css/x/xsiuj0puq.css';
import '../../css/h/hcv64ii3d.css';
import '../../css/a/ai8k78e8q.css';
import '../../css/b/brikvbi7d.css';
import '../../css/j/jinhbin8q.css';
import '../../css/x/x_k8mbc_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qva59y26e wm-shadow"/><path class="cqk-22xfz wm-k"/><path class="qefkrwbtk wm-k"/><path class="pf1dxhdwb wm-k"/><path class="hoiljbbrs wm-k"/><path class="bu8vrqwsz wm-k"/><path class="f4nz1xais wm-k"/><path class="jv6xnxbsn wm-k"/><path class="wm-k xsiuj0puq"/><path class="hcv64ii3d wm-k"/><path class="ai8k78e8q wm-a"/><path class="brikvbi7d wm-a"/><path class="jinhbin8q wm-a"/><path class="wm-a x_k8mbc_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:life-buoy"} {...others} />);
}

export default Component;
