import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h43e48bgp.css';
import '../../css/r/r8v8d6bbm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h43e48bgp"/><path class="r8v8d6bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-boiler-48"} {...others} />);
}

export default Component;
