import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tf536gr4t.css';
import '../../css/u/uzps3ibjj.css';
import '../../css/i/i120jqbvh.css';
import '../../css/z/zipwfabof.css';
import '../../css/y/ym90j4b9x.css';
import '../../css/f/fk7ij0bcp.css';
import '../../css/n/n71_1wbqh.css';
import '../../css/x/x0kp1cwlu.css';
import '../../css/h/hkryxbbky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tf536gr4t wm-shadow"/><path class="uzps3ibjj"/><path class="i120jqbvh"/><path class="zipwfabof"/><path class="wm-shine ym90j4b9x"/><path class="fk7ij0bcp wm-s"/><path class="n71_1wbqh wm-s"/><path class="wm-s x0kp1cwlu"/><path class="hkryxbbky wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:user-minus"} {...others} />);
}

export default Component;
