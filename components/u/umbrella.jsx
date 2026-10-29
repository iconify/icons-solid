import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq__wxp0t.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m3-6rzblf.css';
import '../../css/u/u736pqbmt.css';
import '../../css/q/q10oiubtj.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nczqw0bcm.css';
import '../../css/l/l-8jkq7io.css';
import '../../css/e/e1yznwn2k.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGOyqcHdGj" class="kq__wxp0t"/></defs><g class="t_2lkqbxb"><path class="m3-6rzblf wm-shadow"/><path class="u736pqbmt"/><path class="q10oiubtj"/><use href="#SVGOyqcHdGj" class="d2kvgvbvc"/><path class="nczqw0bcm"/><use href="#SVGOyqcHdGj" class="d2kvgvbvc"/><path class="l-8jkq7io"/><path class="e1yznwn2k wm-shine"/><path class="usyb2xbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:umbrella"} {...others} />);
}

export default Component;
