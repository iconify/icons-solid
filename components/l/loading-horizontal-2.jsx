import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h8ew4ljfb.css';
import '../../css/f/fo3ur6s7p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="h8ew4ljfb"/><path class="fo3ur6s7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:loading-horizontal-2"} {...others} />);
}

export default Component;
