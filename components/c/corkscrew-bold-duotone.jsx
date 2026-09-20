import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7qr63brb.css';
import '../../css/h/h7w9m3boq.css';
import '../../css/u/uwm6s4btm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t7qr63brb"/><path class="h7w9m3boq"/><path class="uwm6s4btm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:corkscrew-bold-duotone"} {...others} />);
}

export default Component;
