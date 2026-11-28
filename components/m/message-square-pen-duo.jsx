import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciyufj2nc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/o/ogg7s5bgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ciyufj2nc secondary"/><g class="dt0cm9dhy primary"><path class="dp12a2bii"/><path class="ogg7s5bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-square-pen-duo"} {...others} />);
}

export default Component;
