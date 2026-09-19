import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwqhhcbhm.css';
import '../../css/f/fov8assxj.css';
import '../../css/v/vall8hb6t.css';
import '../../css/b/bwi3webyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fwqhhcbhm"/><path class="fov8assxj"/><path class="vall8hb6t"/><path class="bwi3webyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-superscript"} {...others} />);
}

export default Component;
