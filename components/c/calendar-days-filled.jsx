import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbq113d_q.css';
import '../../css/j/jxbxvmfyx.css';
import '../../css/t/tr6mc7b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lbq113d_q"/><path class="jxbxvmfyx"/><path class="tr6mc7b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:calendar-days-filled"} {...others} />);
}

export default Component;
