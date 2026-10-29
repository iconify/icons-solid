import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bsuo0en-y.css';
import '../../css/l/lu0o3pjvh.css';
import '../../css/i/ighrvy6qd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="bsuo0en-y"/><path class="lu0o3pjvh wm-a"/><path class="ighrvy6qd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:globe-lock-solid"} {...others} />);
}

export default Component;
