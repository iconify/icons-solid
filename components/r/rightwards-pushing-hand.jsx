import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy3rf6ewf.css';
import '../../css/m/m8wbj0b5b.css';
import '../../css/y/y63x79b_x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iy3rf6ewf"/><path class="m8wbj0b5b"/><path clip-rule="evenodd" class="y63x79b_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rightwards-pushing-hand"} {...others} />);
}

export default Component;
