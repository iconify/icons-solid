import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr4slu2yq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rkgsmimtt.css';
import '../../css/y/y4oawvb0e.css';
import '../../css/c/c3fmgjbda.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rr4slu2yq secondary"/><g class="dt0cm9dhy primary"><path class="rkgsmimtt"/><path class="y4oawvb0e"/><path class="c3fmgjbda"/><path class="qjzyurbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:headphones-off-duo"} {...others} />);
}

export default Component;
