import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6_3mtc5y.css';
import '../../css/d/d_sqewbig.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o6_3mtc5y"/><path class="d_sqewbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chat-two-bubbles-oval-flat"} {...others} />);
}

export default Component;
