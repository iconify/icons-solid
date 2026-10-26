import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/t4s1tlbgn.css';
import '../../css/p/p04r9vt4m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="t4s1tlbgn"/><path class="p04r9vt4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:star-medal"} {...others} />);
}

export default Component;
