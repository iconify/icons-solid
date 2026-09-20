import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/y/yrbdrvajt.css';
import '../../css/e/exuvvh5fb.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="yrbdrvajt"/><path class="exuvvh5fb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:undo"} {...others} />);
}

export default Component;
