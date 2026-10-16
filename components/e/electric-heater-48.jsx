import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct4ocpbvr.css';
import '../../css/z/z8jdvhb0u.css';
import '../../css/j/j3nhhey8u.css';
import '../../css/r/rwguvv37h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ct4ocpbvr"/><path class="z8jdvhb0u"/><path class="j3nhhey8u"/><path class="rwguvv37h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-heater-48"} {...others} />);
}

export default Component;
