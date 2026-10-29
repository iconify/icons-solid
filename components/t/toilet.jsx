import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rlvs0_bxh.css';
import '../../css/o/orbkzms4d.css';
import '../../css/f/f3mhswb8e.css';
import '../../css/h/hp1hbub6q.css';
import '../../css/l/l5ty1pb8l.css';
import '../../css/a/a6xf3yi3d.css';
import '../../css/d/drp-yveeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rlvs0_bxh wm-shadow"/><path class="orbkzms4d"/><path class="f3mhswb8e"/><path class="hp1hbub6q"/><path class="l5ty1pb8l"/><path class="a6xf3yi3d wm-shine"/><path class="drp-yveeu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:toilet"} {...others} />);
}

export default Component;
