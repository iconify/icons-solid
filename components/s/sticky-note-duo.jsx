import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv90sjbvj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vyks3abws.css';
import '../../css/r/ryc81jbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lv90sjbvj secondary"/><g class="dt0cm9dhy primary"><path class="vyks3abws"/><path class="ryc81jbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sticky-note-duo"} {...others} />);
}

export default Component;
