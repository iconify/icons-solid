import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgj39rbmg.css';
import '../../css/q/q2lih6vas.css';
import '../../css/h/hyt-z2-vw.css';
import '../../css/w/wzdj-eflz.css';
import '../../css/r/ri7s5qz8j.css';
import '../../css/f/fc9axwh5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dgj39rbmg wm-shadow"/><path class="q2lih6vas wm-k"/><path class="hyt-z2-vw wm-k"/><path class="wm-k wzdj-eflz"/><path class="ri7s5qz8j wm-k"/><path class="fc9axwh5m wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:drag-handle"} {...others} />);
}

export default Component;
