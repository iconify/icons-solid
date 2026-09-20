import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yplnl1biz.css';
import '../../css/j/j-shekb6c.css';
import '../../css/v/vsyunqiht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yplnl1biz"/><path class="j-shekb6c"/><path clip-rule="evenodd" class="vsyunqiht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-3-outline"} {...others} />);
}

export default Component;
