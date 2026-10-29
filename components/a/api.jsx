import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dzv5adbxy.css';
import '../../css/q/qywgiwg3y.css';
import '../../css/q/qx5seebns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dzv5adbxy wm-k"/><path class="qywgiwg3y wm-a"/><path class="qx5seebns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:api"} {...others} />);
}

export default Component;
