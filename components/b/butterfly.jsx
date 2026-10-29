import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/v0xuqgbpa.css';
import '../../css/z/zo5a0tlgl.css';
import '../../css/f/fgmw-dxsk.css';
import '../../css/p/p40ghkb1c.css';
import '../../css/c/cit2xtb4t.css';
import '../../css/i/i8yi7lb5f.css';
import '../../css/q/qnv91oz9v.css';
import '../../css/c/cp3c5rbiu.css';
import '../../css/c/cyrpunlqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="v0xuqgbpa wm-shadow"/><path class="zo5a0tlgl"/><path class="fgmw-dxsk"/><path class="p40ghkb1c"/><path class="cit2xtb4t"/><path class="i8yi7lb5f"/><path class="qnv91oz9v"/><path class="cp3c5rbiu wm-shine"/><path class="cyrpunlqr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:butterfly"} {...others} />);
}

export default Component;
