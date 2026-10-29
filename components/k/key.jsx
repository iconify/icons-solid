import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8cjwgbkc.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/in048o01d.css';
import '../../css/n/n8627d-wn.css';
import '../../css/l/l8ufbsb7k.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j53gc0brw.css';
import '../../css/l/lpn9xehjo.css';
import '../../css/u/u_69puq5w.css';
import '../../css/n/nuib0x-ft.css';
import '../../css/j/jy843347v.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG0Dt2GdAP" class="r8cjwgbkc"/></defs><g class="t_2lkqbxb"><path class="in048o01d wm-shadow"/><path class="n8627d-wn"/><path class="l8ufbsb7k"/><use href="#SVG0Dt2GdAP" class="d2kvgvbvc"/><path class="j53gc0brw"/><use href="#SVG0Dt2GdAP" class="d2kvgvbvc"/><path class="lpn9xehjo"/><path class="u_69puq5w"/><path class="nuib0x-ft wm-shine"/><path class="jy843347v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:key"} {...others} />);
}

export default Component;
