import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxh8he28q.css';
import '../../css/l/lqme6yszl.css';
import '../../css/e/etfdx2b5v.css';
import '../../css/t/t03slpbnc.css';
import '../../css/o/ont0a4b_g.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dxh8he28q"/><path clip-rule="evenodd" class="lqme6yszl"/><path clip-rule="evenodd" class="etfdx2b5v"/><path class="t03slpbnc"/><path class="ont0a4b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:bluetooth"} {...others} />);
}

export default Component;
