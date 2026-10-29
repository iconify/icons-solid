import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pndg1qtse.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/ca2each_n.css';
import '../../css/u/u9psf548t.css';
import '../../css/i/im64s-r4i.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ivonx3bvt.css';
import '../../css/e/emnnyx83n.css';
import '../../css/u/ufoy9gs0g.css';
import '../../css/m/mh5rm7_ji.css';
import '../../css/e/efbd83yqg.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGcUSPadSp" class="pndg1qtse"/></defs><g class="t_2lkqbxb"><path class="ca2each_n wm-shadow"/><path class="u9psf548t"/><path class="im64s-r4i"/><use href="#SVGcUSPadSp" class="d2kvgvbvc"/><path class="ivonx3bvt"/><use href="#SVGcUSPadSp" class="d2kvgvbvc"/><path class="emnnyx83n"/><path class="ufoy9gs0g"/><path class="mh5rm7_ji wm-shine"/><path class="efbd83yqg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:fuel"} {...others} />);
}

export default Component;
