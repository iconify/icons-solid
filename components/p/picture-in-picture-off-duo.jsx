import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djy0icb9y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/clyp0ebhu.css';
import '../../css/b/bqp-165ha.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djy0icb9y secondary"/><g class="dt0cm9dhy primary"><path class="clyp0ebhu"/><path class="bqp-165ha"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:picture-in-picture-off-duo"} {...others} />);
}

export default Component;
