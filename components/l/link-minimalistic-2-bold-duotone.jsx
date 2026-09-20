import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wgd6nob9p.css';
import '../../css/y/yxozyjbzj.css';
import '../../css/j/jplqmm68v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="wgd6nob9p"/><path class="yxozyjbzj"/></g><path class="jplqmm68v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-2-bold-duotone"} {...others} />);
}

export default Component;
