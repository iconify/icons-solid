import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbvt_c6iu.css';
import '../../css/v/v7ghk2b5q.css';
import '../../css/x/x67zadcwx.css';
import '../../css/c/cybrcdc8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kbvt_c6iu"/><path class="v7ghk2b5q"/><path class="x67zadcwx"/><path clip-rule="evenodd" class="cybrcdc8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wi-fi-angle-outline"} {...others} />);
}

export default Component;
