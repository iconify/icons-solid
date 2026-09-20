import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lt4_7tbfr.css';
import '../../css/f/fe-32tbfb.css';
import '../../css/k/kyt4j6b-c.css';
import '../../css/s/ssw-3aboo.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="lt4_7tbfr"/><path class="fe-32tbfb"/><path class="kyt4j6b-c"/><path class="ssw-3aboo"/></g><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:clapperboard-circle-off"} {...others} />);
}

export default Component;
