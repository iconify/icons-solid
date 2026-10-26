import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vw8aa6tss.css';
import '../../css/k/ky6fbmbud.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="vw8aa6tss"/><path class="ky6fbmbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:plus"} {...others} />);
}

export default Component;
