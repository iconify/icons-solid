import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjag56b6z.css';
import '../../css/j/j8l2ed4er.css';
import '../../css/d/d9tahkbuu.css';
import '../../css/o/o74_6ebpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zjag56b6z"/><path class="j8l2ed4er"/><path class="d9tahkbuu"/><path class="o74_6ebpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-stars-bold-duotone"} {...others} />);
}

export default Component;
