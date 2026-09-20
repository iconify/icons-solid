import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjvhwgq2h.css';
import '../../css/h/h-w6sbb4t.css';
import '../../css/t/ton5smgkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zjvhwgq2h"/><path class="h-w6sbb4t"/><path class="ton5smgkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-stars-bold-duotone"} {...others} />);
}

export default Component;
