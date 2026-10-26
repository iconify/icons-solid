import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/k/k_ip1acaw.css';
import '../../css/s/s4pgyn22p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="k_ip1acaw"/><path class="s4pgyn22p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:hash"} {...others} />);
}

export default Component;
