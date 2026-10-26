import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/n5wlhacmh.css';
import '../../css/l/lnxkbeb5t.css';
import '../../css/n/njx5owbfj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="n5wlhacmh"/><path class="lnxkbeb5t"/><path class="njx5owbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:bird"} {...others} />);
}

export default Component;
