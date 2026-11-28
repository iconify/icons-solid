import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifjhrvbty.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk2gmgbqk.css';
import '../../css/w/wpsrqcnym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifjhrvbty secondary"/><g class="dt0cm9dhy primary"><path class="lk2gmgbqk"/><path class="wpsrqcnym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-pause-duo"} {...others} />);
}

export default Component;
