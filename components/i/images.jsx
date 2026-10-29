import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj32eo61o.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/durhqrbsd.css';
import '../../css/d/dteybybkc.css';
import '../../css/r/r8ssgxb2t.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/otuet0w6c.css';
import '../../css/c/ckb0zxbyy.css';
import '../../css/q/qisqyab7z.css';
import '../../css/j/jwbparb0g.css';
import '../../css/m/mfqi2mlkf.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGbjYYKe1g" class="qj32eo61o"/></defs><g class="t_2lkqbxb"><path class="durhqrbsd wm-shadow"/><path class="dteybybkc"/><path class="r8ssgxb2t"/><use href="#SVGbjYYKe1g" class="d2kvgvbvc"/><path class="otuet0w6c"/><use href="#SVGbjYYKe1g" class="d2kvgvbvc"/><path class="ckb0zxbyy"/><path class="qisqyab7z"/><path class="jwbparb0g wm-shine"/><path class="mfqi2mlkf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:images"} {...others} />);
}

export default Component;
