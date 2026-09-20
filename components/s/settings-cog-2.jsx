import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yu1_o3_xh.css';
import '../../css/n/n_zv-y8ay.css';
import '../../css/g/g792fsber.css';
import '../../css/o/o3645715n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yu1_o3_xh"/><path class="n_zv-y8ay"/><path class="g792fsber"/><path class="o3645715n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:settings-cog-2"} {...others} />);
}

export default Component;
