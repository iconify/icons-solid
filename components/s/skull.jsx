import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/ksv5bzb6u.css';
import '../../css/f/ftev9lnsg.css';
import '../../css/i/ipp7ttbqy.css';
import '../../css/o/oxpmg-bgw.css';
import '../../css/a/ax_e8ebcc.css';
import '../../css/p/p2500cbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ksv5bzb6u wm-shadow"/><path class="ftev9lnsg"/><path class="ipp7ttbqy"/><path class="oxpmg-bgw"/><path class="ax_e8ebcc"/><path class="p2500cbvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:skull"} {...others} />);
}

export default Component;
