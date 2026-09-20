import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkpg3_byn.css';
import '../../css/c/cfvq8wjbx.css';
import '../../css/n/np712fb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dkpg3_byn"/><path class="cfvq8wjbx"/><path class="np712fb0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-camera-bold-duotone"} {...others} />);
}

export default Component;
