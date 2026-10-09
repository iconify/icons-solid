import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6ltpbg0v.css';
import '../../css/t/t_7rprl1m.css';
import '../../css/k/ketn0_oyj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g6ltpbg0v"/><path class="t_7rprl1m"/><path class="ketn0_oyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-car-20-bold"} {...others} />);
}

export default Component;
