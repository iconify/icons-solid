import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kysk_9b_v.css';
import '../../css/s/su-blz2fx.css';
import '../../css/i/iljndilhm.css';
import '../../css/p/pvzhv9xon.css';
import '../../css/j/j324vhxjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kysk_9b_v wm-shadow"/><path class="su-blz2fx"/><path class="iljndilhm"/><path class="pvzhv9xon"/><path class="j324vhxjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rolling-pin"} {...others} />);
}

export default Component;
