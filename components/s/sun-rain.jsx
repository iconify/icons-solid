import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cu2l68bwm.css';
import '../../css/p/p6titwq1k.css';
import '../../css/n/npnkpyb1l.css';
import '../../css/m/m6gksbcfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cu2l68bwm"/><path class="p6titwq1k"/><path class="npnkpyb1l"/><path class="m6gksbcfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sun-rain"} {...others} />);
}

export default Component;
