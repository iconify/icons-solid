import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgel_z4sw.css';
import '../../css/q/qob8aqbxz.css';
import '../../css/f/f65wj5bau.css';
import '../../css/x/xqjqm5q9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xgel_z4sw"/><path class="qob8aqbxz"/><path class="f65wj5bau"/><path clip-rule="evenodd" class="xqjqm5q9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-3-bold-duotone"} {...others} />);
}

export default Component;
