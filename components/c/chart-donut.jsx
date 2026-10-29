import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lslb_f9id.css';
import '../../css/q/qy1ni-bgs.css';
import '../../css/v/v20_eu2nd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lslb_f9id wm-k"/><path class="qy1ni-bgs wm-a"/><path class="v20_eu2nd wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-donut"} {...others} />);
}

export default Component;
