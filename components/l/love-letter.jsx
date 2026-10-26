import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/h/h6wabwbio.css';
import '../../css/r/rq22o0d_q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="h6wabwbio"/><path class="rq22o0d_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:love-letter"} {...others} />);
}

export default Component;
