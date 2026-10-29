import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pagn65buj.css';
import '../../css/i/i5u4_tftb.css';
import '../../css/j/jl9ci3blh.css';
import '../../css/k/k0than4bb.css';
import '../../css/r/r1os1lb7m.css';
import '../../css/s/s7-czyclq.css';
import '../../css/k/k98ruq81w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pagn65buj wm-shadow"/><path class="i5u4_tftb"/><path class="jl9ci3blh"/><path class="k0than4bb"/><path class="r1os1lb7m wm-shine"/><path class="s7-czyclq wm-deco"/><path class="k98ruq81w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:feather"} {...others} />);
}

export default Component;
