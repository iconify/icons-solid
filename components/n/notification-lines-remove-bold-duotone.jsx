import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tyxy_pbkb.css';
import '../../css/v/v8a-6vb_q.css';
import '../../css/z/ziq71pbbd.css';
import '../../css/r/rfsjwnbvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tyxy_pbkb"/><path class="v8a-6vb_q"/><path clip-rule="evenodd" class="ziq71pbbd"/><path class="rfsjwnbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-lines-remove-bold-duotone"} {...others} />);
}

export default Component;
