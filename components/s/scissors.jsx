import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vd9bw5w3q.css';
import '../../css/j/jbboq_m6w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="vd9bw5w3q"/><path class="jbboq_m6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:scissors"} {...others} />);
}

export default Component;
