import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydvlm2ewb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q379lc5uk.css';
import '../../css/v/vfk79qbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ydvlm2ewb"/><g class="dt0cm9dhy primary"><path class="q379lc5uk"/><path class="vfk79qbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flag-duo"} {...others} />);
}

export default Component;
