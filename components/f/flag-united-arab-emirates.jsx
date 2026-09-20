import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/n/njwtk9bwg.css';
import '../../css/q/q0ouhhhum.css';
import '../../css/h/hkc780bsc.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="njwtk9bwg"/><path class="q0ouhhhum"/><path class="hkc780bsc"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-united-arab-emirates"} {...others} />);
}

export default Component;
