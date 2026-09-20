import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7hlmrp-q.css';
import '../../css/c/cqxljhbfa.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/exzaj7nbx.css';
import '../../css/k/khwlr1_iy.css';
import '../../css/r/rbb20ldgr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g7hlmrp-q"/><path class="cqxljhbfa"/><g class="jn8qy4bru"><path class="exzaj7nbx"/><path class="khwlr1_iy"/><path class="rbb20ldgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-steam-from-nose"} {...others} />);
}

export default Component;
