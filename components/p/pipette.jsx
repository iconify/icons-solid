import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fa7dgtb3c.css';
import '../../css/n/n_u9xnnfw.css';
import '../../css/d/djoj20bhg.css';
import '../../css/m/mvz54c2ft.css';
import '../../css/k/kpq2r_bdx.css';
import '../../css/r/rltobub8h.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fa7dgtb3c wm-shadow"/><path class="n_u9xnnfw"/><path class="djoj20bhg"/><path class="mvz54c2ft"/><path class="kpq2r_bdx"/><path class="rltobub8h wm-shine"/><path class="aexe23bqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pipette"} {...others} />);
}

export default Component;
