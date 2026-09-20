import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ds0znlb8s.css';
import '../../css/t/tcec7mbfa.css';
import '../../css/u/ufb_r8e8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ds0znlb8s"/><path class="tcec7mbfa"/><path clip-rule="evenodd" class="ufb_r8e8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-15-seconds-back-bold-duotone"} {...others} />);
}

export default Component;
