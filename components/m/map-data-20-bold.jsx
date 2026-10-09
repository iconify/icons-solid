import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktpu1oifd.css';
import '../../css/f/fo0_yzbmr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ktpu1oifd"/><path class="fo0_yzbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-data-20-bold"} {...others} />);
}

export default Component;
