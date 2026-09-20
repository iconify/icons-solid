import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpsiiab0r.css';
import '../../css/x/xs8xf5a_d.css';
import '../../css/w/wl_075bhu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wewcxs-cp.css';
import '../../css/m/m9bybwbxc.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dpsiiab0r"><path class="xs8xf5a_d"/><path class="wl_075bhu"/></g><g class="jn8qy4bru"><path class="wewcxs-cp"/><path class="m9bybwbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spade-suit"} {...others} />);
}

export default Component;
