import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f-6f0v0li.css';
import '../../css/n/nyqu9pbav.css';
import '../../css/p/pmpdcfa6x.css';
import '../../css/i/ix637pv0d.css';
import '../../css/s/s087h-b4a.css';
import '../../css/y/yznfu4bnt.css';
import '../../css/h/hkxvr7qfz.css';
import '../../css/r/r6q4ch3-j.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="f-6f0v0li wm-shadow"/><path class="nyqu9pbav"/><path class="pmpdcfa6x"/><path class="ix637pv0d"/><path class="s087h-b4a"/><path class="yznfu4bnt"/><path class="hkxvr7qfz"/><path class="r6q4ch3-j wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:binoculars"} {...others} />);
}

export default Component;
