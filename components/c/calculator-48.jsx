import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6wl1rbzv.css';
import '../../css/p/p5fo1bbqi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k6wl1rbzv"/><path class="p5fo1bbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calculator-48"} {...others} />);
}

export default Component;
