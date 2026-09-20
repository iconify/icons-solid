import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nypl5fnmm.css';
import '../../css/u/uy1cwxbqe.css';
import '../../css/a/a879kybop.css';
import '../../css/i/i7jbc5bsv.css';
import '../../css/i/i5d-cuk9n.css';
import '../../css/t/tmgre9bmd.css';
import '../../css/r/r8q1bo6rb.css';
import '../../css/e/ey31ozbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nypl5fnmm"/><path class="uy1cwxbqe"/><path class="a879kybop"/><path class="i7jbc5bsv"/><path class="i5d-cuk9n"/><path class="tmgre9bmd"/><path class="r8q1bo6rb"/><path class="ey31ozbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dashed-outline"} {...others} />);
}

export default Component;
