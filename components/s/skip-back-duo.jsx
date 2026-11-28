import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-du3gbxc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x_5g46hau.css';
import '../../css/m/my3y2fbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-du3gbxc secondary"/><g class="dt0cm9dhy primary"><path class="x_5g46hau"/><path class="my3y2fbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:skip-back-duo"} {...others} />);
}

export default Component;
