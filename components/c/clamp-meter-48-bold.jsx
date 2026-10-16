import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dacf7bcvi.css';
import '../../css/p/poyb6lb_l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dacf7bcvi"/><path class="poyb6lb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clamp-meter-48-bold"} {...others} />);
}

export default Component;
