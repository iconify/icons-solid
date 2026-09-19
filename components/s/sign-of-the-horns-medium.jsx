import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzg0ssqec.css';
import '../../css/y/ycbplvv5s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lzg0ssqec"/><path class="ycbplvv5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sign-of-the-horns-medium"} {...others} />);
}

export default Component;
