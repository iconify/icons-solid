import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n6lj9wybl.css';
import '../../css/r/rgn98pbkq.css';
import '../../css/c/cod-3j-zz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="n6lj9wybl"/><path class="rgn98pbkq"/><path class="cod-3j-zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:globe"} {...others} />);
}

export default Component;
