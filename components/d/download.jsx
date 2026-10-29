import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1crgmabh.css';
import '../../css/w/welkdjbsw.css';
import '../../css/i/i5r_zil9s.css';
import '../../css/h/hmvsz2buj.css';
import '../../css/q/q249jlbpf.css';
import '../../css/a/az--zgqde.css';
import '../../css/r/rl8xtypgo.css';
import '../../css/s/s-r2i36gp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t1crgmabh wm-k"/><path class="welkdjbsw wm-k"/><path class="i5r_zil9s wm-k"/><path class="hmvsz2buj wm-shine"/><path class="q249jlbpf wm-a"/><path class="az--zgqde wm-a"/><path class="rl8xtypgo wm-a"/><path class="s-r2i36gp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:download"} {...others} />);
}

export default Component;
