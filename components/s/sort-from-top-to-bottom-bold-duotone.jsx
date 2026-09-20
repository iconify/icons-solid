import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e05obob3s.css';
import '../../css/e/e1tzrpb-z.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rtvzzmbld.css';
import '../../css/x/xnl3i3bcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e05obob3s"/><path class="e1tzrpb-z"/><g class="mc2zb0bvp"><path class="rtvzzmbld"/><path class="xnl3i3bcu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-top-to-bottom-bold-duotone"} {...others} />);
}

export default Component;
