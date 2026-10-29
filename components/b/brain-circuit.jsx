import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uang0nbwd.css';
import '../../css/u/uevxz-vra.css';
import '../../css/f/f25g_20ew.css';
import '../../css/x/xu1456b0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uang0nbwd wm-k"/><path class="uevxz-vra wm-a"/><path class="f25g_20ew wm-k"/><path class="xu1456b0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:brain-circuit"} {...others} />);
}

export default Component;
