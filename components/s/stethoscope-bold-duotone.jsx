import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xtz38eb7k.css';
import '../../css/v/vexzz8vpb.css';
import '../../css/z/z3-7o0lpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xtz38eb7k"/><path class="vexzz8vpb"/><path class="z3-7o0lpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stethoscope-bold-duotone"} {...others} />);
}

export default Component;
