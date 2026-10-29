import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsggu4svf.css';
import '../../css/a/ap16asbvy.css';
import '../../css/r/rouyi9cqc.css';
import '../../css/b/bfwajib8q.css';
import '../../css/o/o-l01xdaw.css';
import '../../css/x/x5dfv07-d.css';
import '../../css/l/la05el0gv.css';
import '../../css/a/a6am_nvbi.css';
import '../../css/f/f8n0sbn8z.css';
import '../../css/v/vryiv5bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsggu4svf wm-shadow"/><path class="ap16asbvy wm-k"/><path class="rouyi9cqc wm-k"/><path class="bfwajib8q wm-k"/><path class="o-l01xdaw wm-k"/><path class="wm-k x5dfv07-d"/><path class="la05el0gv wm-shine"/><path class="a6am_nvbi wm-a"/><path class="f8n0sbn8z wm-a"/><path class="vryiv5bqn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:notebook"} {...others} />);
}

export default Component;
