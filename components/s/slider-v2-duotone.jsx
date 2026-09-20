import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0zdr4low.css';
import '../../css/l/lv-wwpbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j0zdr4low"/><path clip-rule="evenodd" class="lv-wwpbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:slider-v2-duotone"} {...others} />);
}

export default Component;
