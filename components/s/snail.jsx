import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jwr-ufcpq.css';
import '../../css/a/ay1-hpebq.css';
import '../../css/o/olwkaeqqd.css';
import '../../css/o/o-q7-kbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jwr-ufcpq"/><path class="ay1-hpebq"/><path class="olwkaeqqd"/><path class="o-q7-kbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:snail"} {...others} />);
}

export default Component;
