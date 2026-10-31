import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q2tsw-b3d.css';
import '../../css/g/g1x_t8b8g.css';
import '../../css/f/f0xsko-4b.css';
import '../../css/g/guqhbex6p.css';
import '../../css/s/s1kut8o6j.css';
import '../../css/v/v-4o6sb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="q2tsw-b3d"/><path class="g1x_t8b8g wm-shine"/><path class="f0xsko-4b wm-k"/><path class="guqhbex6p wm-a"/><path class="s1kut8o6j wm-s"/><path class="v-4o6sb2b wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-alien"} {...others} />);
}

export default Component;
