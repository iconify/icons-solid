import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oye_q3fhr.css';
import '../../css/v/vq_y3vp5k.css';
import '../../css/v/vj77h6eyt.css';
import '../../css/w/we3xhublk.css';
import '../../css/a/a7p09yblh.css';
import '../../css/u/u5bjoq9ew.css';
import '../../css/s/s3bq5acro.css';
import '../../css/q/q5bmwgb1n.css';
import '../../css/j/jtdwfct7d.css';
import '../../css/r/rc289ybbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oye_q3fhr wm-k"/><path class="vq_y3vp5k wm-k"/><path class="vj77h6eyt wm-k"/><path class="we3xhublk wm-a"/><path class="a7p09yblh wm-a"/><path class="u5bjoq9ew wm-a"/><path class="s3bq5acro wm-a"/><path class="q5bmwgb1n wm-a"/><path class="jtdwfct7d wm-a"/><path class="rc289ybbo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:scan-search"} {...others} />);
}

export default Component;
