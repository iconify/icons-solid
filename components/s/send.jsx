import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r4vu0ob3i.css';
import '../../css/w/wn0a1jbxm.css';
import '../../css/d/dtjn1bc9f.css';
import '../../css/u/upjlw8b0o.css';
import '../../css/n/ndn3yubew.css';
import '../../css/i/ic12qmb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="r4vu0ob3i wm-shadow"/><path class="wn0a1jbxm"/><path class="dtjn1bc9f"/><path class="upjlw8b0o"/><path class="ndn3yubew wm-shine"/><path class="ic12qmb9a wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:send"} {...others} />);
}

export default Component;
