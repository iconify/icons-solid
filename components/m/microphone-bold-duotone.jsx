import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgel_z4sw.css';
import '../../css/u/uos8l6bgq.css';
import '../../css/v/vtjj0vb0d.css';
import '../../css/i/iav18tmdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xgel_z4sw"/><path class="uos8l6bgq"/><path class="vtjj0vb0d"/><path class="iav18tmdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-bold-duotone"} {...others} />);
}

export default Component;
