import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q0vto-bmm.css';
import '../../css/q/q3_7_ccpf.css';
import '../../css/a/atm8lqble.css';
import '../../css/a/ae-e09b3w.css';
import '../../css/p/p4k_t7lwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q0vto-bmm wm-k"/><path class="q3_7_ccpf wm-a"/><path class="atm8lqble wm-shadow"/><path class="ae-e09b3w wm-k"/><path class="p4k_t7lwr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-left-right-engrave"} {...others} />);
}

export default Component;
