import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-zh-ibev.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zwffu0v7l.css';
import '../../css/k/kg9s9rdnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-zh-ibev secondary"/><g class="dt0cm9dhy primary"><path class="zwffu0v7l"/><path class="kg9s9rdnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-pen-duo"} {...others} />);
}

export default Component;
