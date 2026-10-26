import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/ns8zonbir.css';
import '../../css/q/qo5667fmu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ns8zonbir"/><path class="qo5667fmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:tree-pine"} {...others} />);
}

export default Component;
