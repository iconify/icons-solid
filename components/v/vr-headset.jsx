import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p7xtb1jti.css';
import '../../css/g/ge876rb1s.css';
import '../../css/h/hu6oh0b7y.css';
import '../../css/a/a7f2hvojq.css';
import '../../css/x/x71pznbcy.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="p7xtb1jti wm-shadow"/><path class="ge876rb1s"/><path class="hu6oh0b7y"/><path class="a7f2hvojq"/><path class="wm-shine x71pznbcy"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:vr-headset"} {...others} />);
}

export default Component;
