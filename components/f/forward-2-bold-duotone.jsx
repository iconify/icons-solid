import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-hxukuvt.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/g__2d8btp.css';
import '../../css/k/k1tpnh3pq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u-hxukuvt"/><g class="mc2zb0bvp"><path class="g__2d8btp"/><path class="k1tpnh3pq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:forward-2-bold-duotone"} {...others} />);
}

export default Component;
