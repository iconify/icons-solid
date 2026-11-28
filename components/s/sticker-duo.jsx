import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-drp5bju.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s3aa3b7qt.css';
import '../../css/s/s0rcl214k.css';
import '../../css/d/dmnr1ibmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-drp5bju secondary"/><g class="dt0cm9dhy primary"><path class="s3aa3b7qt"/><path class="s0rcl214k"/><path class="dmnr1ibmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sticker-duo"} {...others} />);
}

export default Component;
