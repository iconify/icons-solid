import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vn9hj2b6u.css';
import '../../css/l/li6hocbgp.css';
import '../../css/x/x3x3c_b5w.css';
import '../../css/j/jys1ei-qk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vn9hj2b6u wm-k"/><path class="li6hocbgp wm-k"/><path class="x3x3c_b5w"/><path class="jys1ei-qk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:lion-head"} {...others} />);
}

export default Component;
