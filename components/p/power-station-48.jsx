import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1j5nsboq.css';
import '../../css/p/pwrb__blp.css';
import '../../css/q/qrfic8bvi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j1j5nsboq"/><path class="pwrb__blp"/><path class="qrfic8bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-station-48"} {...others} />);
}

export default Component;
