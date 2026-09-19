import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y8t5mze7v.css';
import '../../css/l/lp_kmkbpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="y8t5mze7v"/><path class="lp_kmkbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:church-outline"} {...others} />);
}

export default Component;
