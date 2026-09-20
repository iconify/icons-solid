import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zy9gfybke.css';
import '../../css/x/xt3yzabqg.css';
import '../../css/w/wne-px2-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zy9gfybke"/><path class="xt3yzabqg"/><path class="wne-px2-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-square-bold-duotone"} {...others} />);
}

export default Component;
