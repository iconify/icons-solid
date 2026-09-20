import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/klyxgkb-z.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wb8cjb-ns.css';
import '../../css/g/gy2nyz5qi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="klyxgkb-z"/><g class="mc2zb0bvp"><path class="wb8cjb-ns"/><path class="gy2nyz5qi"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reply-2-bold-duotone"} {...others} />);
}

export default Component;
