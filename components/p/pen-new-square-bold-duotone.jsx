import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ourocwb_f.css';
import '../../css/p/pa701kpad.css';
import '../../css/r/rxjiv1uzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ourocwb_f"/><path class="pa701kpad"/><path class="rxjiv1uzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-new-square-bold-duotone"} {...others} />);
}

export default Component;
