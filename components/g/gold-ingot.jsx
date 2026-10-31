import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te_q-q0ba.css';
import '../../css/i/i2tezwb-n.css';
import '../../css/w/wh6-4kbyx.css';
import '../../css/k/k98g-3byq.css';
import '../../css/q/qz83ltbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="te_q-q0ba wm-k"/><path class="i2tezwb-n wm-a"/><path class="wh6-4kbyx wm-k"/><path class="k98g-3byq wm-a"/><path class="qz83ltbmx wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:gold-ingot"} {...others} />);
}

export default Component;
