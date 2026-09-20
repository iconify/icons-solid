import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/br-pjpo2g.css';
import '../../css/s/s7ajzb_1q.css';
import '../../css/n/ng0k-9szg.css';
import '../../css/d/d-beq0ypp.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/kr97k8biz.css';
import '../../css/g/g5q3fvb5q.css';
import '../../css/r/r6y7sebqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="br-pjpo2g"/><path class="s7ajzb_1q"/><path class="ng0k-9szg"/><path class="d-beq0ypp"/><g class="mc2zb0bvp"><path class="kr97k8biz"/><path class="g5q3fvb5q"/><path class="r6y7sebqf"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-bold-duotone"} {...others} />);
}

export default Component;
