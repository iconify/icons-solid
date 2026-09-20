import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yj4rt4l4o.css';
import '../../css/r/rv-h1qbyx.css';
import '../../css/j/jdwdohb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yj4rt4l4o"/><path class="rv-h1qbyx"/><path clip-rule="evenodd" class="jdwdohb8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:trellis-duotone"} {...others} />);
}

export default Component;
