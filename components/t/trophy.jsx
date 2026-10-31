import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o3d-qee9v.css';
import '../../css/w/wgrn9ietc.css';
import '../../css/k/k3bcclbor.css';
import '../../css/x/x6cjcpbgz.css';
import '../../css/x/xrk4p-wug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="o3d-qee9v wm-shadow"/><path class="wgrn9ietc wm-shadow"/><path class="k3bcclbor"/><path class="x6cjcpbgz"/><path class="xrk4p-wug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:trophy"} {...others} />);
}

export default Component;
