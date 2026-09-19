import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_76v41zj.css';
import '../../css/f/f0jc0r9-x.css';
import '../../css/v/vbggi-bhl.css';
import '../../css/t/t6xqh4k_o.css';
import '../../css/r/r67k4zbbb.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="z_76v41zj"/><path class="f0jc0r9-x"/><path class="vbggi-bhl"/><path class="t6xqh4k_o"/><path class="r67k4zbbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gy"} {...others} />);
}

export default Component;
