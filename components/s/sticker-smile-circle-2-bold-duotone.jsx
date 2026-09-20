import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0ambbcsj.css';
import '../../css/c/ccmj7ubct.css';
import '../../css/f/f_hvwcoce.css';
import '../../css/d/dzk5w4biy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r0ambbcsj"/><path class="ccmj7ubct"/><path class="f_hvwcoce"/><path class="dzk5w4biy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-circle-2-bold-duotone"} {...others} />);
}

export default Component;
