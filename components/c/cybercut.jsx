import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9plwlb2q.css';
import '../../css/t/t_ev7s-sv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d9plwlb2q"/><path class="t_ev7s-sv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cybercut"} {...others} />);
}

export default Component;
