import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tkt8u4hzo.css';
import '../../css/c/csew3wblh.css';
import '../../css/l/l_161docl.css';
import '../../css/y/yuyv6cc-u.css';
import '../../css/t/tmf253bug.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="tkt8u4hzo"/><path class="csew3wblh"/><path class="l_161docl"/><path class="yuyv6cc-u"/><path class="tmf253bug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:fingerprint"} {...others} />);
}

export default Component;
