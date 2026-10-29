import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iv8mq4p-u.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/w/w1_fj6bpp.css';
import '../../css/q/qv7s7bn6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iv8mq4p-u wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="w1_fj6bpp wm-k"/><path class="qv7s7bn6a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ghost-blueprint"} {...others} />);
}

export default Component;
