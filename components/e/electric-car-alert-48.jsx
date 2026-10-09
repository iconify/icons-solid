import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfdfq4bue.css';
import '../../css/i/iaalw5bbu.css';
import '../../css/b/bxzxb8v8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cfdfq4bue"/><path class="iaalw5bbu"/><path class="bxzxb8v8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-car-alert-48"} {...others} />);
}

export default Component;
