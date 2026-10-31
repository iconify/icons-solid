import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wy87--d7y.css';
import '../../css/l/lsrqcbj0u.css';
import '../../css/v/vf4v90byg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k wy87--d7y"/><path class="lsrqcbj0u wm-a"/><path class="vf4v90byg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:case-upper"} {...others} />);
}

export default Component;
