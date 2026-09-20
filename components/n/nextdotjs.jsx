import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viwce_ben.css';
import '../../css/f/fwe61nbcd.css';
import '../../css/t/t826cibew.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/stui2mbih.css';

const viewBox = {"width":180,"height":180};
const content = `<mask id="SVGHWp9zczx" width="180" height="180" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><circle class="viwce_ben"/></mask><g mask="url(#SVGHWp9zczx)"><circle class="viwce_ben"/><path fill="url(#SVGR6HFychW)" class="fwe61nbcd"/><path fill="url(#SVGO7E04qYS)" class="t826cibew"/></g><defs><linearGradient id="SVGR6HFychW" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="stui2mbih"/></linearGradient><linearGradient id="SVGO7E04qYS" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="stui2mbih"/></linearGradient></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nextdotjs"} {...others} />);
}

export default Component;
