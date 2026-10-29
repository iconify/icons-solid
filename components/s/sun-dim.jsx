import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr-ex-q-i.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nhql8_bln.css';
import '../../css/a/a-yytjepc.css';
import '../../css/x/xpx-f109x.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pn-m-w0ag.css';
import '../../css/y/yuonwu4fx.css';
import '../../css/r/rimsyrsdy.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGw5Unkezz" class="mr-ex-q-i"/></defs><g class="t_2lkqbxb"><path class="nhql8_bln wm-shadow"/><path class="a-yytjepc"/><path class="xpx-f109x"/><use href="#SVGw5Unkezz" class="d2kvgvbvc"/><path class="pn-m-w0ag"/><use href="#SVGw5Unkezz" class="d2kvgvbvc"/><path class="yuonwu4fx"/><path class="rimsyrsdy wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sun-dim"} {...others} />);
}

export default Component;
