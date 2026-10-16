import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo53krbdf.css';
import '../../css/e/e6f6u_3ws.css';
import '../../css/h/h-g0e0bjc.css';
import '../../css/u/uz1sdemxy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vo53krbdf"/><path class="e6f6u_3ws"/><path class="h-g0e0bjc"/><path class="uz1sdemxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:extractor-fan-20"} {...others} />);
}

export default Component;
