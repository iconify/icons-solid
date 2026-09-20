import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_roi2bop.css';
import '../../css/x/x-blg6bci.css';
import '../../css/x/xx1mfbceb.css';
import '../../css/x/xng98kbze.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="t_roi2bop"/><path class="x-blg6bci"/><path class="xx1mfbceb"/><path class="xng98kbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chat-bubble-square-write"} {...others} />);
}

export default Component;
