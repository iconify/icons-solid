import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cu5wgkbfh.css';
import '../../css/h/hj_d86v7e.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cu5wgkbfh"/><path class="hj_d86v7e"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:calm-outline"} {...others} />);
}

export default Component;
