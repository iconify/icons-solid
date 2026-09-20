import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ao-ogrrvi.css';
import '../../css/e/e15jp5xgs.css';
import '../../css/v/vn6aygsxu.css';
import '../../css/t/t12e08b0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ao-ogrrvi"/><path class="e15jp5xgs"/><path class="vn6aygsxu"/><path class="t12e08b0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:emoji-funny-square-bold-duotone"} {...others} />);
}

export default Component;
