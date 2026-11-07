import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz625mb3h.css';
import '../../css/v/vfll34fsr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/m2-on0bla.css';
import '../../css/v/vipv0t5kp.css';
import '../../css/m/mswbmfbld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qz625mb3h"/><path class="vfll34fsr"/><g class="xtpeb-edw"><path class="m2-on0bla"/><path class="vipv0t5kp"/><path class="mswbmfbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-ellipsis-bold-duotone"} {...others} />);
}

export default Component;
