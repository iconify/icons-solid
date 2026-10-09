import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ripftlb_v.css';
import '../../css/h/hwfolek5p.css';
import '../../css/i/i07ips82d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ripftlb_v"/><path class="hwfolek5p"/><path class="i07ips82d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-water-20-bold"} {...others} />);
}

export default Component;
