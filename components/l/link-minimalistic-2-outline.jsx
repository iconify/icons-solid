import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wgd6nob9p.css';
import '../../css/y/yxozyjbzj.css';
import '../../css/b/b_tob1ipw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wgd6nob9p"/><path class="yxozyjbzj"/><path class="b_tob1ipw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-2-outline"} {...others} />);
}

export default Component;
