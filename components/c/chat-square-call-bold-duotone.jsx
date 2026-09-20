import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/p/palodkbln.css';
import '../../css/z/zmgop4_qn.css';
import '../../css/l/l1k6rfq7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path class="palodkbln"/><path class="zmgop4_qn"/><path class="l1k6rfq7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-call-bold-duotone"} {...others} />);
}

export default Component;
