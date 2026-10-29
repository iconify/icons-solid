import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c2ln7vuvt.css';
import '../../css/x/xppl1n1ro.css';
import '../../css/a/ajxlmhv5v.css';
import '../../css/y/yyo644bik.css';
import '../../css/v/vwsia0b7l.css';
import '../../css/u/uubpn-45c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="c2ln7vuvt wm-shadow"/><path class="xppl1n1ro"/><path class="ajxlmhv5v"/><path class="yyo644bik"/><path class="vwsia0b7l wm-shine"/><path class="uubpn-45c wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:heart-pulse"} {...others} />);
}

export default Component;
