import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi8j84bbv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dmacaebrz.css';
import '../../css/k/koq907bzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bi8j84bbv secondary"/><g class="dt0cm9dhy primary"><path class="dmacaebrz"/><path class="koq907bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:slice-duo"} {...others} />);
}

export default Component;
