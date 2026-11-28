import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjd2x0bfl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jrgpz7bvh.css';
import '../../css/g/gcbea1zjt.css';
import '../../css/j/j7k7ottks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjd2x0bfl secondary"/><g class="dt0cm9dhy primary"><path class="jrgpz7bvh"/><path class="gcbea1zjt"/><path class="j7k7ottks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-square-dashed-check-duo"} {...others} />);
}

export default Component;
