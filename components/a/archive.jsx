import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqhdsrbpo.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b2tl1fbgr.css';
import '../../css/o/oi3x71bay.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fqhdsrbpo"/><g class="ij2x_72vy"><path class="b2tl1fbgr"/><path class="oi3x71bay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:archive"} {...others} />);
}

export default Component;
