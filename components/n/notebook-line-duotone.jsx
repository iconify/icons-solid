import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kbbftyu-m.css';
import '../../css/q/q1gsu37sn.css';
import '../../css/w/wurlbwzqw.css';
import '../../css/k/kd9g48fun.css';
import '../../css/e/emjwy2umw.css';
import '../../css/u/ur-0t6b4e.css';
import '../../css/x/xxfyb4b_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kbbftyu-m"/><path class="q1gsu37sn"/><path class="wurlbwzqw"/><path class="kd9g48fun"/><path class="emjwy2umw"/><path class="ur-0t6b4e"/><path class="xxfyb4b_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-line-duotone"} {...others} />);
}

export default Component;
