import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcu59kbfz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c0mmavm7v.css';
import '../../css/e/e8wttxgta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rcu59kbfz secondary"/><g class="dt0cm9dhy primary"><path class="c0mmavm7v"/><path class="e8wttxgta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:messages-circle-duo"} {...others} />);
}

export default Component;
