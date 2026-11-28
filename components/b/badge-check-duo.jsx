import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_oj2pm_r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/us6kxt9tp.css';
import '../../css/g/gws5glbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_oj2pm_r secondary"/><g class="dt0cm9dhy primary"><path class="us6kxt9tp"/><path class="gws5glbsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:badge-check-duo"} {...others} />);
}

export default Component;
