import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a-gubjjfc.css';
import '../../css/q/qgh6xbbrk.css';
import '../../css/n/nql1yibtz.css';
import '../../css/f/femubdokr.css';
import '../../css/u/u34o6lzmp.css';
import '../../css/d/dxm8_bb7i.css';
import '../../css/k/khsbjpbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="a-gubjjfc wm-shadow"/><path class="qgh6xbbrk"/><path class="nql1yibtz"/><path class="femubdokr"/><path class="u34o6lzmp"/><path class="dxm8_bb7i wm-shine"/><path class="khsbjpbqw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:droplets"} {...others} />);
}

export default Component;
