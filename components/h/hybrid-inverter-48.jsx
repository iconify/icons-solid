import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgp2dhbyi.css';
import '../../css/e/eeyhvjk3w.css';
import '../../css/b/bzc7nkboy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wgp2dhbyi"/><path class="eeyhvjk3w"/><path class="bzc7nkboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hybrid-inverter-48"} {...others} />);
}

export default Component;
