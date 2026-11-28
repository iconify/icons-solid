import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq4-99b5e.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mf-b0qbej.css';
import '../../css/u/u2h6v2jyt.css';
import '../../css/i/i3vad_bkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dq4-99b5e secondary"/><g class="dt0cm9dhy primary"><path class="mf-b0qbej"/><path class="u2h6v2jyt"/><path class="i3vad_bkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mars-duo"} {...others} />);
}

export default Component;
