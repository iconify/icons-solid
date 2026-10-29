import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x0rs3dbyl.css';
import '../../css/l/lqxba8kpa.css';
import '../../css/l/lrszm4b0g.css';
import '../../css/r/ryqpeewbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k x0rs3dbyl"/><path class="lqxba8kpa wm-a"/><path class="lrszm4b0g"/><path class="ryqpeewbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:certificate"} {...others} />);
}

export default Component;
