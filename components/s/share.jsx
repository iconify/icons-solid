import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uz1q-vz7d.css';
import '../../css/p/ph4u_qbyi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="uz1q-vz7d"/><path class="ph4u_qbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:share"} {...others} />);
}

export default Component;
