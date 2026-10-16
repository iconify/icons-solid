import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gphkpac7l.css';
import '../../css/c/cwzf0sb5m.css';
import '../../css/p/poayr0wpe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gphkpac7l"/><path class="cwzf0sb5m"/><path class="poayr0wpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:iot-device-48-bold"} {...others} />);
}

export default Component;
