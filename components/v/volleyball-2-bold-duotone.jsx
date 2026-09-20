import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omuo_f6iv.css';
import '../../css/y/yb-69mwcu.css';
import '../../css/y/yg1lrvlrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="omuo_f6iv"/><path class="yb-69mwcu"/><path class="yg1lrvlrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volleyball-2-bold-duotone"} {...others} />);
}

export default Component;
