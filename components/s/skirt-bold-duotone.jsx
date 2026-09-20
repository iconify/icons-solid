import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zkmtr3pxm.css';
import '../../css/u/u5u-7kwlh.css';
import '../../css/a/a01zqgaln.css';
import '../../css/i/ix0y5hbra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zkmtr3pxm"/><path class="u5u-7kwlh"/><path class="a01zqgaln"/><path class="ix0y5hbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skirt-bold-duotone"} {...others} />);
}

export default Component;
