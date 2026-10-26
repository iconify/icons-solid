import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/cib199bml.css';
import '../../css/l/lics95bri.css';
import '../../css/p/pmblnqb-x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="cib199bml"/><path class="lics95bri"/><path class="pmblnqb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:home"} {...others} />);
}

export default Component;
