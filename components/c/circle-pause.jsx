import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/x/x8967onjv.css';
import '../../css/w/wjgikcbut.css';
import '../../css/f/fdf08cccu.css';
import '../../css/m/mcvjj6b-l.css';
import '../../css/o/osu-sehzd.css';
import '../../css/h/hp-4k_bpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="wm-k x8967onjv"/><path class="wjgikcbut wm-k"/><path class="fdf08cccu wm-shine"/><path class="mcvjj6b-l wm-a"/><path class="osu-sehzd wm-a"/><path class="hp-4k_bpx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-pause"} {...others} />);
}

export default Component;
