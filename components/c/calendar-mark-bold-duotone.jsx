import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qwtoqccvd.css';
import '../../css/k/kt_wmkbmo.css';
import '../../css/z/z_v77-bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qwtoqccvd"/><path class="kt_wmkbmo"/><path class="z_v77-bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-mark-bold-duotone"} {...others} />);
}

export default Component;
