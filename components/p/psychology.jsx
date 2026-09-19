import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqb1nds4s.css';
import '../../css/y/y6m1c19td.css';
import '../../css/l/lvz26h8eq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aqb1nds4s"/><path class="y6m1c19td"/><path clip-rule="evenodd" class="lvz26h8eq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:psychology"} {...others} />);
}

export default Component;
