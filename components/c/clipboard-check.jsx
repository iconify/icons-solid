import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lc2i193pv.css';
import '../../css/p/p_z3d3ben.css';
import '../../css/c/cre15cbsi.css';
import '../../css/h/hafim0tfh.css';
import '../../css/u/usn354yzk.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lc2i193pv wm-shadow"/><path class="p_z3d3ben"/><path class="cre15cbsi"/><path class="hafim0tfh"/><path class="usn354yzk wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:clipboard-check"} {...others} />);
}

export default Component;
