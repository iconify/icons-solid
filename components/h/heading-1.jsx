import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kg-l4934i.css';
import '../../css/t/ttg-au5jk.css';
import '../../css/b/budlit7mi.css';
import '../../css/l/lkct47blt.css';
import '../../css/w/wt6ry8bxl.css';
import '../../css/e/e9-3l0i3c.css';
import '../../css/n/n43l5tbpb.css';
import '../../css/z/zwk4wjbew.css';
import '../../css/x/xp6kit01q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kg-l4934i wm-shadow"/><path class="ttg-au5jk"/><path class="budlit7mi"/><path class="lkct47blt"/><path class="wm-shine wt6ry8bxl"/><path class="e9-3l0i3c wm-s"/><path class="n43l5tbpb wm-s"/><path class="wm-s zwk4wjbew"/><path class="wm-deco xp6kit01q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:heading-1"} {...others} />);
}

export default Component;
