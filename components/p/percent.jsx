import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rpjbnzqvy.css';
import '../../css/v/vjz4sbbcu.css';
import '../../css/l/lxvwh2ban.css';
import '../../css/w/wzn9d1bad.css';
import '../../css/e/e-y4_x8ee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rpjbnzqvy wm-shadow"/><path class="vjz4sbbcu"/><path class="lxvwh2ban"/><path class="wzn9d1bad"/><path class="e-y4_x8ee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:percent"} {...others} />);
}

export default Component;
