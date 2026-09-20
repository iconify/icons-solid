import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/l/lv3exab7e.css';
import '../../css/l/la8juur7d.css';
import '../../css/l/lhvh71b1a.css';
import '../../css/u/ux0kji9-q.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="lv3exab7e"/><path clip-rule="evenodd" class="la8juur7d"/><path clip-rule="evenodd" class="lhvh71b1a"/><path class="ux0kji9-q"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:map-circle"} {...others} />);
}

export default Component;
