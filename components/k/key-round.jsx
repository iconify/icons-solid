import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7r_2sbzp.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k34s0iblj.css';
import '../../css/y/yh8gorbgm.css';
import '../../css/w/wlcmvccmz.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vfpn-1gfv.css';
import '../../css/d/d0kgp73uo.css';
import '../../css/q/qe1xfnbpt.css';
import '../../css/x/x3ixl-b1b.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGqk12UbkJ" class="h7r_2sbzp"/></defs><g class="t_2lkqbxb"><path class="k34s0iblj wm-shadow"/><path class="yh8gorbgm"/><path class="wlcmvccmz"/><use href="#SVGqk12UbkJ" class="d2kvgvbvc"/><path class="vfpn-1gfv"/><use href="#SVGqk12UbkJ" class="d2kvgvbvc"/><path class="d0kgp73uo"/><path class="qe1xfnbpt wm-shine"/><path class="wm-deco x3ixl-b1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:key-round"} {...others} />);
}

export default Component;
