import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8x5fnbye.css';
import '../../css/d/dc-k-0ubs.css';
import '../../css/c/cuksg3bdf.css';
import '../../css/v/vfu80czwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c8x5fnbye"/><path class="dc-k-0ubs"/><path class="cuksg3bdf"/><path class="vfu80czwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-bold"} {...others} />);
}

export default Component;
