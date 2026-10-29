import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g74ufgb1e.css';
import '../../css/h/hkcj5-bst.css';
import '../../css/z/z8x7oi4it.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="g74ufgb1e"/><path class="hkcj5-bst wm-a"/><path class="z8x7oi4it"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tablet-duo"} {...others} />);
}

export default Component;
