import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccsq9pb1u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h5op4ac3k.css';
import '../../css/t/t-t8vdb2e.css';
import '../../css/w/w3i7gnfji.css';
import '../../css/y/y4xn0mszr.css';
import '../../css/x/xn543qbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccsq9pb1u secondary"/><g class="dt0cm9dhy primary"><path class="h5op4ac3k"/><path class="t-t8vdb2e"/><path class="w3i7gnfji"/><path class="y4xn0mszr"/><path class="xn543qbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:vector-square-duo"} {...others} />);
}

export default Component;
