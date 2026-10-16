import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuhib-bsq.css';
import '../../css/s/srw89g_hc.css';
import '../../css/d/deelbpbhg.css';
import '../../css/f/f6law37ty.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cuhib-bsq"/><path class="srw89g_hc"/><path class="deelbpbhg"/><path class="f6law37ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:roof-20"} {...others} />);
}

export default Component;
