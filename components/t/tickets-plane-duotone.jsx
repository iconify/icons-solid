import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fs14leyon.css';
import '../../css/o/olznywbdz.css';
import '../../css/b/bpvbic07d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fs14leyon"/><path class="olznywbdz"/><path class="bpvbic07d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tickets-plane-duotone"} {...others} />);
}

export default Component;
