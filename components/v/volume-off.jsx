import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/ouj-8gb4o.css';
import '../../css/i/i4rb1hbiz.css';
import '../../css/f/f0gy4ibga.css';
import '../../css/s/s0nhmpb_d.css';
import '../../css/k/k4smpn52z.css';
import '../../css/s/sbs6lmb7d.css';
import '../../css/y/yny6b4_cu.css';
import '../../css/s/sbpsvzkyu.css';
import '../../css/z/zd4kf3b-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ouj-8gb4o wm-shadow"/><path class="i4rb1hbiz"/><path class="f0gy4ibga"/><path class="s0nhmpb_d"/><path class="k4smpn52z wm-shine"/><path class="sbs6lmb7d wm-s"/><path class="wm-s yny6b4_cu"/><path class="sbpsvzkyu wm-s"/><path class="wm-deco zd4kf3b-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:volume-off"} {...others} />);
}

export default Component;
