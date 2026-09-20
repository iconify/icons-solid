import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svtuu7o8s.css';
import '../../css/k/k_rrd8b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="svtuu7o8s"/><path class="k_rrd8b4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:chromecast-3"} {...others} />);
}

export default Component;
