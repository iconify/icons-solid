import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oy8zhnx-j.css';
import '../../css/w/w9jsm6b_o.css';
import '../../css/l/lwib7xzrm.css';
import '../../css/z/z1f7cfk4e.css';
import '../../css/p/p770cdbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oy8zhnx-j wm-shadow"/><path class="w9jsm6b_o"/><path class="lwib7xzrm"/><path class="z1f7cfk4e"/><path class="p770cdbhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:school"} {...others} />);
}

export default Component;
