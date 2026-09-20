import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/b/bkidd7bto.css';
import '../../css/p/p_be3ubrk.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="bkidd7bto"/><path class="p_be3ubrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:calendar-move"} {...others} />);
}

export default Component;
