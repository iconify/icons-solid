import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xjes2kbti.css';
import '../../css/y/yzbzu_bof.css';
import '../../css/v/vxiwx7bjr.css';
import '../../css/e/eq3frqb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xjes2kbti"/><path class="yzbzu_bof"/><path class="vxiwx7bjr"/><path class="eq3frqb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-code-linear"} {...others} />);
}

export default Component;
