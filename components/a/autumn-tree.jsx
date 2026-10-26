import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/j/j4v5knxow.css';
import '../../css/k/k7kym8lkn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="j4v5knxow"/><path class="k7kym8lkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:autumn-tree"} {...others} />);
}

export default Component;
