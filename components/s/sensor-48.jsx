import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tofpwqbpz.css';
import '../../css/i/i96afluhf.css';
import '../../css/c/cq3in7biq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tofpwqbpz"/><path class="i96afluhf"/><path class="cq3in7biq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sensor-48"} {...others} />);
}

export default Component;
