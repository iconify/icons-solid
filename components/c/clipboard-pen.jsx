import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/ou5fon2oc.css';
import '../../css/l/lyvmr5t1a.css';
import '../../css/a/angm3ebub.css';
import '../../css/k/kmb4_wunr.css';
import '../../css/z/z24yenbgg.css';
import '../../css/e/e6ehuqbzk.css';
import '../../css/r/revtshbmt.css';
import '../../css/d/d7a_tbctu.css';
import '../../css/w/w-x8knbvg.css';
import '../../css/q/qup1mcbtz.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ou5fon2oc wm-shadow"/><path class="lyvmr5t1a"/><path class="angm3ebub"/><path class="kmb4_wunr"/><path class="wm-shine z24yenbgg"/><path class="e6ehuqbzk wm-s"/><path class="revtshbmt wm-s"/><path class="d7a_tbctu wm-s"/><path class="w-x8knbvg wm-s"/><path class="qup1mcbtz wm-s"/><path class="g4jl-u_xd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:clipboard-pen"} {...others} />);
}

export default Component;
