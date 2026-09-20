import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0jvhibuk.css';
import '../../css/w/wzdz90gow.css';
import '../../css/z/zrwz6z69g.css';
import '../../css/h/hqqreeu3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y0jvhibuk"/><path class="wzdz90gow"/><path class="zrwz6z69g"/><path class="hqqreeu3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chat-bubble-locked"} {...others} />);
}

export default Component;
