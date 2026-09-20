import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi1833bza.css';
import '../../css/k/kt_9h6beg.css';
import '../../css/t/t9n961ban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zi1833bza"/><path class="kt_9h6beg"/><path clip-rule="evenodd" class="t9n961ban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bed-bold"} {...others} />);
}

export default Component;
