import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/q/q7v6fcbws.css';
import '../../css/o/ol8-t4idr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="q7v6fcbws"/><path class="ol8-t4idr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:tablet"} {...others} />);
}

export default Component;
