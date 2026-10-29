import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lc2i193pv.css';
import '../../css/p/p_z3d3ben.css';
import '../../css/t/talo3abbq.css';
import '../../css/i/i90nr7b2y.css';
import '../../css/s/seg39wnmx.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lc2i193pv wm-shadow"/><path class="p_z3d3ben"/><path class="talo3abbq"/><path class="i90nr7b2y"/><path class="seg39wnmx wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:clipboard-list"} {...others} />);
}

export default Component;
