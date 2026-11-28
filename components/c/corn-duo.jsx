import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwovr8b3h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nmjmamnbd.css';
import '../../css/g/gbbwmvbvf.css';
import '../../css/r/reqp0xphh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwovr8b3h secondary"/><g class="dt0cm9dhy primary"><path class="nmjmamnbd"/><path class="gbbwmvbvf"/><path class="reqp0xphh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:corn-duo"} {...others} />);
}

export default Component;
