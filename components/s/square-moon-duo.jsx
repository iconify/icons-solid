import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hazsxsbyl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/j/j1h113bom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hazsxsbyl secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="j1h113bom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-moon-duo"} {...others} />);
}

export default Component;
