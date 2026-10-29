import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f-7gy5byl.css';
import '../../css/z/zuxl2frha.css';
import '../../css/y/ynuqnnqzn.css';
import '../../css/t/t6q0p4bxh.css';
import '../../css/e/efpyzhttl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f-7gy5byl wm-k"/><path class="wm-a zuxl2frha"/><path class="wm-shadow ynuqnnqzn"/><path class="t6q0p4bxh wm-k"/><path class="efpyzhttl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ice-cream-engrave"} {...others} />);
}

export default Component;
