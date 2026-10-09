import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd0toxw3n.css';
import '../../css/e/e_hc3taxx.css';
import '../../css/f/fz88cgg4i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gd0toxw3n"/><path class="e_hc3taxx"/><path class="fz88cgg4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:log-out-20"} {...others} />);
}

export default Component;
