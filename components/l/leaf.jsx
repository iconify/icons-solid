import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/h/ha978gbtd.css';
import '../../css/q/q3oymib2p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ha978gbtd"/><path class="q3oymib2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:leaf"} {...others} />);
}

export default Component;
