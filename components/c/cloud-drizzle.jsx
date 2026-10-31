import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdzxnubhz.css';
import '../../css/e/e1cn13b6e.css';
import '../../css/e/eepj7-40x.css';
import '../../css/b/b-j5vttmy.css';
import '../../css/p/phy7fub6u.css';
import '../../css/x/xxug1fbxv.css';
import '../../css/i/ihgdkbg9l.css';
import '../../css/l/l6oe2lbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fdzxnubhz wm-k"/><path class="e1cn13b6e wm-a"/><path class="eepj7-40x wm-deco"/><path class="b-j5vttmy wm-k"/><path class="phy7fub6u wm-a"/><path class="wm-shadow xxug1fbxv"/><path class="ihgdkbg9l wm-shine"/><path class="l6oe2lbpv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:cloud-drizzle"} {...others} />);
}

export default Component;
