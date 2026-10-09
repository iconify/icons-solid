import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0dvj9g4i.css';
import '../../css/i/i2a3t5bgb.css';
import '../../css/t/tg1ou3w9r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z0dvj9g4i"/><path class="i2a3t5bgb"/><path class="tg1ou3w9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:socket-48"} {...others} />);
}

export default Component;
