import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4r1zg5ul.css';
import '../../css/i/ita7t9bpp.css';
import '../../css/j/j7-_diniq.css';
import '../../css/b/bdxu0wqtq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="j4r1zg5ul"/><path class="ita7t9bpp"/><path class="j7-_diniq"/><path class="bdxu0wqtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:nurse-assistant-emergency"} {...others} />);
}

export default Component;
