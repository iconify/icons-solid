import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4rargb_i.css';
import '../../css/z/zu0r11hoa.css';
import '../../css/u/u80fwbejn.css';
import '../../css/t/tytii4j6e.css';
import '../../css/c/ccblr5byi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b4rargb_i"/><path class="zu0r11hoa"/><path class="u80fwbejn"/><path class="tytii4j6e"/><path class="ccblr5byi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:earth-airplane"} {...others} />);
}

export default Component;
