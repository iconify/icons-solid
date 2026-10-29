import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzqauzfhv.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fpsqgtbeo.css';
import '../../css/j/jzc-q-slz.css';
import '../../css/a/aqy47n71p.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cns0ivbxg.css';
import '../../css/y/y0fu82_bx.css';
import '../../css/k/ko-isfjkl.css';
import '../../css/x/x0-lum6ck.css';
import '../../css/s/sk8g3kbnj.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGEXOqKbQH" class="uzqauzfhv"/></defs><g class="t_2lkqbxb"><path class="fpsqgtbeo wm-shadow"/><path class="jzc-q-slz"/><path class="aqy47n71p"/><use href="#SVGEXOqKbQH" class="d2kvgvbvc"/><path class="cns0ivbxg"/><use href="#SVGEXOqKbQH" class="d2kvgvbvc"/><path class="y0fu82_bx"/><path class="ko-isfjkl wm-shine"/><path class="wm-s x0-lum6ck"/><path class="sk8g3kbnj wm-s"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:paint-bucket"} {...others} />);
}

export default Component;
