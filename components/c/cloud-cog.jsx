import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooumd8bug.css';
import '../../css/a/a8k30abfa.css';
import '../../css/j/j1z4w5bdb.css';
import '../../css/s/s_hpxbass.css';
import '../../css/x/xj56ribxe.css';
import '../../css/i/in3crq-6z.css';
import '../../css/o/on_rffsln.css';
import '../../css/j/jh6r1jahr.css';
import '../../css/k/kvkwdabog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ooumd8bug wm-k"/><path class="a8k30abfa wm-k"/><path class="j1z4w5bdb wm-k"/><path class="s_hpxbass wm-shine"/><path class="wm-s xj56ribxe"/><path class="in3crq-6z wm-s"/><path class="on_rffsln wm-s"/><path class="jh6r1jahr wm-shine"/><path class="kvkwdabog wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-cog"} {...others} />);
}

export default Component;
