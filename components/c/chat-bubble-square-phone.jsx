import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3oek9bzm.css';
import '../../css/l/luu9apbcm.css';
import '../../css/m/md7edy7iy.css';
import '../../css/s/s9mdvibkx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="w3oek9bzm"/><path class="luu9apbcm"/><path class="md7edy7iy"/><path class="s9mdvibkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:chat-bubble-square-phone"} {...others} />);
}

export default Component;
