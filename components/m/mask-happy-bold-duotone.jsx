import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wel6-sfco.css';
import '../../css/e/e3uzo1utx.css';
import '../../css/v/vx2z6dbbm.css';
import '../../css/v/vibdus27q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wel6-sfco"/><path class="e3uzo1utx"/><path class="vx2z6dbbm"/><path class="vibdus27q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-happy-bold-duotone"} {...others} />);
}

export default Component;
