import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnk3glbbr.css';
import '../../css/r/r9jbezb2f.css';
import '../../css/q/q3xuzddzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dnk3glbbr"/><path class="r9jbezb2f"/><path class="q3xuzddzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-bold-duotone"} {...others} />);
}

export default Component;
