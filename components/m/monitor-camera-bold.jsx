import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmltt1bqg.css';
import '../../css/z/zbc7-aboz.css';
import '../../css/d/d0_o308xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zmltt1bqg"/><path class="zbc7-aboz"/><path class="d0_o308xd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-camera-bold"} {...others} />);
}

export default Component;
