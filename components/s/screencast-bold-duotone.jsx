import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxxxmyjfa.css';
import '../../css/g/g8017d-ng.css';
import '../../css/w/w99_q4b3f.css';
import '../../css/p/p6hmd-bom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mxxxmyjfa"/><path class="g8017d-ng"/><path class="w99_q4b3f"/><path class="p6hmd-bom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-bold-duotone"} {...others} />);
}

export default Component;
