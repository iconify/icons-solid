import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/nd6g5t5yt.css';
import '../../css/k/kdyi4knmi.css';
import '../../css/g/g0r9zom_u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="nd6g5t5yt"/><path class="kdyi4knmi"/><path class="g0r9zom_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:external-link"} {...others} />);
}

export default Component;
