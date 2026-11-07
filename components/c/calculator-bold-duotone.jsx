import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y36t8bb6h.css';
import '../../css/w/wi-d7ebgc.css';
import '../../css/z/z6iiwbh2e.css';
import '../../css/k/k92a__bcz.css';
import '../../css/s/siz-fbf9p.css';
import '../../css/y/yrcey2bdn.css';
import '../../css/w/w2cj0qboi.css';
import '../../css/k/ks-0lxe9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y36t8bb6h"/><path class="wi-d7ebgc"/><path class="z6iiwbh2e"/><path class="k92a__bcz"/><path class="siz-fbf9p"/><path class="yrcey2bdn"/><path class="w2cj0qboi"/><path class="ks-0lxe9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calculator-bold-duotone"} {...others} />);
}

export default Component;
