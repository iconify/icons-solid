import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nu4x-ob-e.css';
import '../../css/n/njd3u7m6i.css';
import '../../css/g/g8bf7mbzk.css';
import '../../css/s/spsi6z36x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nu4x-ob-e"/><path class="njd3u7m6i"/><path class="g8bf7mbzk"/><path class="spsi6z36x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-rain-bold-duotone"} {...others} />);
}

export default Component;
