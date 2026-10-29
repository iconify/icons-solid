import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tqsr1bc9y.css';
import '../../css/w/wudccbb5j.css';
import '../../css/l/ljaxrxbyi.css';
import '../../css/y/yfq76ib6a.css';
import '../../css/k/k2yibwbbh.css';
import '../../css/n/nbmbv77et.css';
import '../../css/i/ilci2pb8c.css';
import '../../css/r/r3ps3izwl.css';
import '../../css/u/uop4a1_bg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tqsr1bc9y wm-shadow"/><path class="wudccbb5j"/><path class="ljaxrxbyi"/><path class="yfq76ib6a"/><path class="k2yibwbbh wm-shine"/><path class="nbmbv77et wm-s"/><path class="ilci2pb8c wm-s"/><path class="r3ps3izwl wm-s"/><path class="uop4a1_bg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:siren"} {...others} />);
}

export default Component;
