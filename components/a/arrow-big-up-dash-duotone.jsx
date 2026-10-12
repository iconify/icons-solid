import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uluoubbrd.css';
import '../../css/c/c225mmbyl.css';
import '../../css/l/l5ul_sbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uluoubbrd"/><path class="c225mmbyl"/><path class="l5ul_sbmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:arrow-big-up-dash-duotone"} {...others} />);
}

export default Component;
