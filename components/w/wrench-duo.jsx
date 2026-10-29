import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cr65t2lle.css';
import '../../css/v/vnwlw3via.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cr65t2lle"/><path class="vnwlw3via"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wrench-duo"} {...others} />);
}

export default Component;
