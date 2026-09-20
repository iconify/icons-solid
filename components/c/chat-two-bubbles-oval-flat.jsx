import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt4fsgdcr.css';
import '../../css/z/zr4_6ubua.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kt4fsgdcr"/><path class="zr4_6ubua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:chat-two-bubbles-oval-flat"} {...others} />);
}

export default Component;
