import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8lud0bbk.css';
import '../../css/q/q03_xvbaf.css';
import '../../css/j/j_e93hhyk.css';
import '../../css/f/fbg45xzkt.css';
import '../../css/i/izb20nb-l.css';
import '../../css/e/e88-f5glj.css';
import '../../css/t/t0gyxi5jv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 1.78 9)" class="f8lud0bbk"/><path class="q03_xvbaf"/><rect transform="rotate(-90 1.78 9)" class="j_e93hhyk"/><path class="fbg45xzkt"/><path class="izb20nb-l"/><path class="e88-f5glj"/><path class="t0gyxi5jv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:server-restore"} {...others} />);
}

export default Component;
