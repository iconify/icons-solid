import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/l3_vg2x-s.css';
import '../../css/x/xonehqbol.css';
import '../../css/n/np21q2bms.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="l3_vg2x-s"/><path class="xonehqbol"/><path class="np21q2bms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:files"} {...others} />);
}

export default Component;
