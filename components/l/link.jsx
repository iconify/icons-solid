import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iplb2xdtq.css';
import '../../css/w/w85mppa_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="iplb2xdtq"/><path class="w85mppa_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:link"} {...others} />);
}

export default Component;
