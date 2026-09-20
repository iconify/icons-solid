import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2yq81ccv.css';
import '../../css/v/vfi-0wi9v.css';
import '../../css/e/eyw1wfyhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n2yq81ccv"/><path class="vfi-0wi9v"/><path class="eyw1wfyhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-opened-bold-duotone"} {...others} />);
}

export default Component;
