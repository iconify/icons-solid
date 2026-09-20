import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuose96rb.css';
import '../../css/a/a1pz58blc.css';
import '../../css/p/p7a2b8b9r.css';
import '../../css/s/srygt-0la.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wuose96rb"/><path class="a1pz58blc"/><path class="p7a2b8b9r"/><path class="srygt-0la"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confounded-square-bold-duotone"} {...others} />);
}

export default Component;
