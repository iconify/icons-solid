import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c81f7cben.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g67ljabai.css';
import '../../css/s/sa5yg8k0v.css';
import '../../css/z/zdkuy3xou.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p2-4elbnl.css';
import '../../css/h/he_odfxdn.css';
import '../../css/t/t11dgkb4y.css';
import '../../css/h/hfl5hlbek.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGcvwDpLgD" class="c81f7cben"/></defs><g class="t_2lkqbxb"><path class="g67ljabai wm-shadow"/><path class="sa5yg8k0v"/><path class="zdkuy3xou"/><use href="#SVGcvwDpLgD" class="d2kvgvbvc"/><path class="p2-4elbnl"/><use href="#SVGcvwDpLgD" class="d2kvgvbvc"/><path class="he_odfxdn"/><path class="t11dgkb4y wm-shine"/><path class="hfl5hlbek wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sleigh"} {...others} />);
}

export default Component;
