import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vyv-oxbwg.css';
import '../../css/c/cm5ildbne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="vyv-oxbwg"/><path class="cm5ildbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:map-pin"} {...others} />);
}

export default Component;
