import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/v3ecf6xiv.css';
import '../../css/n/nx9vyfb4v.css';
import '../../css/u/ua1yt1bzf.css';
import '../../css/f/fwg_wlbzj.css';
import '../../css/y/yyyhanfkx.css';
import '../../css/s/sated2bnm.css';
import '../../css/i/i-jooyb1c.css';
import '../../css/w/wcsqvmb2u.css';
import '../../css/h/heduygx7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="v3ecf6xiv wm-shadow"/><path class="nx9vyfb4v"/><path class="ua1yt1bzf"/><path class="fwg_wlbzj"/><path class="yyyhanfkx"/><path class="sated2bnm"/><path class="i-jooyb1c"/><path class="wcsqvmb2u wm-shine"/><path class="heduygx7d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:git-compare"} {...others} />);
}

export default Component;
