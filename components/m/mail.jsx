import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/h/h6wabwbio.css';
import '../../css/o/osvhr9e0u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="h6wabwbio"/><path class="osvhr9e0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:mail"} {...others} />);
}

export default Component;
