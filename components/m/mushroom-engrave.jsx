import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gpzd8zb1s.css';
import '../../css/t/ts-fa3biy.css';
import '../../css/q/qf-tu6dot.css';
import '../../css/i/iycs7wjzl.css';
import '../../css/t/tsi5nvbml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gpzd8zb1s wm-k"/><path class="ts-fa3biy wm-a"/><path class="qf-tu6dot wm-shadow"/><path class="iycs7wjzl wm-k"/><path class="tsi5nvbml wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mushroom-engrave"} {...others} />);
}

export default Component;
