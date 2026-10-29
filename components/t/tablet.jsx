import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z8x7oi4it.css';
import '../../css/h/hkcj5-bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z8x7oi4it"/><path class="hkcj5-bst wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tablet"} {...others} />);
}

export default Component;
