import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z04moyb-c.css';
import '../../css/p/p6fry9bte.css';
import '../../css/w/wuxak0bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z04moyb-c"/><path class="p6fry9bte"/><path class="wuxak0bwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bottle-bold-duotone"} {...others} />);
}

export default Component;
