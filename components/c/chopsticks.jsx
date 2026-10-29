import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oeyoe4ulc.css';
import '../../css/o/o7b3p0sit.css';
import '../../css/w/wddcw_b0d.css';
import '../../css/j/javs_0bhz.css';
import '../../css/l/l_-_e0bjw.css';
import '../../css/z/z1sgv-bul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="oeyoe4ulc wm-shadow"/><path class="o7b3p0sit"/><path class="wddcw_b0d"/><path class="javs_0bhz"/><path class="l_-_e0bjw wm-shine"/><path class="wm-deco z1sgv-bul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chopsticks"} {...others} />);
}

export default Component;
