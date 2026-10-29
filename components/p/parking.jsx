import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdcux2b4t.css';
import '../../css/h/hp2vjm6bs.css';
import '../../css/t/tz50xma6u.css';
import '../../css/r/rn9znr_9i.css';
import '../../css/x/x-_bfgbba.css';
import '../../css/n/n1djbuptk.css';
import '../../css/i/iyjm94g9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tdcux2b4t wm-k"/><path class="hp2vjm6bs wm-k"/><path class="tz50xma6u wm-k"/><path class="rn9znr_9i wm-shine"/><path class="wm-a x-_bfgbba"/><path class="n1djbuptk wm-a"/><path class="iyjm94g9q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:parking"} {...others} />);
}

export default Component;
