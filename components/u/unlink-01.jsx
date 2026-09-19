import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ypuw9196q.css';
import '../../css/h/hd8qcwbxu.css';
import '../../css/c/c-ga8gx1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ypuw9196q"/><path class="hd8qcwbxu"/><path class="c-ga8gx1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:unlink-01"} {...others} />);
}

export default Component;
