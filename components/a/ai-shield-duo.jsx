import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyj2t-l6e.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l5amd1two.css';
import '../../css/c/c9u2s_lcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyj2t-l6e secondary"/><g class="dt0cm9dhy primary"><path class="l5amd1two"/><path class="c9u2s_lcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-shield-duo"} {...others} />);
}

export default Component;
