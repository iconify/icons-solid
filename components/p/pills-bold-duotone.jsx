import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7s-xyb_u.css';
import '../../css/r/rhalxh-xw.css';
import '../../css/v/vvnhdab1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v7s-xyb_u"/><path class="rhalxh-xw"/><path class="vvnhdab1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-bold-duotone"} {...others} />);
}

export default Component;
