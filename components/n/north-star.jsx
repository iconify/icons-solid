import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7zil-bnm.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/glwl_8xws.css';
import '../../css/w/w0ncyab-u.css';
import '../../css/w/wdyjwupve.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/whj0l8bwl.css';
import '../../css/q/q-52a0jjp.css';
import '../../css/d/dw28-3sfr.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGSGUAqKmC" class="q7zil-bnm"/></defs><g class="t_2lkqbxb"><path class="glwl_8xws wm-shadow"/><path class="w0ncyab-u"/><path class="wdyjwupve"/><use href="#SVGSGUAqKmC" class="d2kvgvbvc"/><path class="whj0l8bwl"/><use href="#SVGSGUAqKmC" class="d2kvgvbvc"/><path class="q-52a0jjp"/><path class="dw28-3sfr"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:north-star"} {...others} />);
}

export default Component;
