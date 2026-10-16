import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plln0276b.css';
import '../../css/t/tiviyrbop.css';
import '../../css/w/wc-swabbr.css';
import '../../css/q/qhmcjtbas.css';
import '../../css/c/c6hjxwbap.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="plln0276b"/><path class="tiviyrbop"/><path class="wc-swabbr"/><path class="qhmcjtbas"/><path class="c6hjxwbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:timeline-48"} {...others} />);
}

export default Component;
