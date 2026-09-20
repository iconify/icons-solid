import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp2v3vb9u.css';
import '../../css/f/fi-rup-ng.css';
import '../../css/s/sm_ty6fcj.css';
import '../../css/u/u9nsezbwi.css';
import '../../css/j/jn9punbuo.css';

const viewBox = {"width":24,"height":24};
const content = `<path fill="url(#SVGgBs15bZW)" class="xp2v3vb9u"/><path fill="url(#SVGC6g9Eexz)" class="fi-rup-ng"/><path class="sm_ty6fcj"/><defs><linearGradient id="SVGgBs15bZW" x1="0" x2="15.209" y1="11.563" y2="12.019" gradientUnits="userSpaceOnUse"><stop class="u9nsezbwi"/><stop offset="1" class="jn9punbuo"/></linearGradient><linearGradient id="SVGC6g9Eexz" x1="17.58" x2="24.003" y1="11.387" y2="11.533" gradientUnits="userSpaceOnUse"><stop class="u9nsezbwi"/><stop offset="1" class="jn9punbuo"/></linearGradient></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:myshell"} {...others} />);
}

export default Component;
