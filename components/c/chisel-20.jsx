import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny9vdpbbd.css';
import '../../css/k/ku2rlub5r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ny9vdpbbd"/><path class="ku2rlub5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chisel-20"} {...others} />);
}

export default Component;
