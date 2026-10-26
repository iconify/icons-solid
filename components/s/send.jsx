import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/k/k-c1vwgum.css';
import '../../css/s/s6aehis0e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="k-c1vwgum"/><path class="s6aehis0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:send"} {...others} />);
}

export default Component;
