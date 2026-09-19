import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/la_v_lbyo.css';
import '../../css/t/tj3-sfldn.css';
import '../../css/r/rhxe-ug5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="la_v_lbyo"/><path class="tj3-sfldn"/><path class="rhxe-ug5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:touch-10"} {...others} />);
}

export default Component;
