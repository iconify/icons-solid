import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xar3zbcoy.css';
import '../../css/f/f_f20g63b.css';
import '../../css/o/omt0vob3d.css';
import '../../css/p/pl37d4g4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xar3zbcoy"/><path class="f_f20g63b"/><path class="omt0vob3d"/><path class="pl37d4g4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alarm-add-bold-duotone"} {...others} />);
}

export default Component;
