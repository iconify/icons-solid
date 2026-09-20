import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssoy8o_wu.css';
import '../../css/w/wj6b-6x4m.css';
import '../../css/n/ncpijfb-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ssoy8o_wu"/><path class="wj6b-6x4m"/><path class="ncpijfb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:box-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
