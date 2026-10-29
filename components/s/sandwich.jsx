import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dkerhqs_s.css';
import '../../css/s/sxbz3so-x.css';
import '../../css/r/r__m9f86r.css';
import '../../css/u/ul5wjsbks.css';
import '../../css/m/mik6elsxp.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dkerhqs_s wm-shadow"/><path class="sxbz3so-x"/><path class="r__m9f86r"/><path class="ul5wjsbks"/><path class="mik6elsxp wm-shine"/><path class="q_yw93bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sandwich"} {...others} />);
}

export default Component;
