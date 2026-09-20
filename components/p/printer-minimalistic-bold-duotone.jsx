import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mhy19cc_w.css';
import '../../css/e/e_onljbso.css';
import '../../css/w/wdscbgf6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mhy19cc_w"/><path class="e_onljbso"/><path class="wdscbgf6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
