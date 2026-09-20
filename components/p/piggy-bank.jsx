import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9jf8abrh.css';
import '../../css/j/jt0p6rbhk.css';
import '../../css/v/vkxaytb_e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="t9jf8abrh"/><path class="jt0p6rbhk"/><path class="vkxaytb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:piggy-bank"} {...others} />);
}

export default Component;
