import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/d/dzms03blg.css';
import '../../css/q/q3tk9nyeg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="dzms03blg"/><path class="q3tk9nyeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-thermostat-20"} {...others} />);
}

export default Component;
