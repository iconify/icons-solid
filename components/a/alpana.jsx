import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ua3gxd_3a.css';
import '../../css/w/w4v6mxbdl.css';
import '../../css/f/fyi1w-gps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ua3gxd_3a wm-k"/><path class="w4v6mxbdl wm-a"/><path class="fyi1w-gps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:alpana"} {...others} />);
}

export default Component;
