import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9dkilbgt.css';
import '../../css/w/w8fdecdms.css';
import '../../css/q/q0pvq0bhq.css';
import '../../css/s/sw7vu1bfu.css';
import '../../css/i/iv8x-1bnz.css';
import '../../css/u/u_lm8gbop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l9dkilbgt"/><path class="w8fdecdms"/><path class="q0pvq0bhq"/><path class="sw7vu1bfu"/><path class="iv8x-1bnz"/><path class="u_lm8gbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:camera-settings-wifi"} {...others} />);
}

export default Component;
