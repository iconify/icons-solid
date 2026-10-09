import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0d-k9bod.css';
import '../../css/i/iuszqrjvz.css';
import '../../css/o/oyn2j5rbc.css';
import '../../css/w/wlnmmrb-d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w0d-k9bod"/><path class="iuszqrjvz"/><path class="oyn2j5rbc"/><path class="wlnmmrb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-x-20"} {...others} />);
}

export default Component;
