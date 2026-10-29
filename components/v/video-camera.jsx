import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mcaeuvwhv.css';
import '../../css/r/ref_leb8a.css';
import '../../css/p/pk9qqzb7v.css';
import '../../css/a/aoodbzb2h.css';
import '../../css/t/tf37dhcce.css';
import '../../css/a/a-c1xpkjm.css';
import '../../css/i/izwgjwgsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="mcaeuvwhv wm-shadow"/><path class="ref_leb8a"/><path class="pk9qqzb7v"/><path class="aoodbzb2h"/><path class="tf37dhcce"/><path class="a-c1xpkjm wm-shine"/><path class="izwgjwgsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:video-camera"} {...others} />);
}

export default Component;
