import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4p9_pvsu.css';
import '../../css/y/y4t3tjb_d.css';
import '../../css/d/djh-j8-ck.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p4p9_pvsu"/><path class="y4t3tjb_d"/><path clip-rule="evenodd" class="djh-j8-ck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cpap-machine-outline"} {...others} />);
}

export default Component;
