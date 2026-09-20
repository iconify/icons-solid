import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbuecfbqn.css';
import '../../css/y/ylik4k7po.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2};
const content = `<g class="cuyn6tgcc"><path class="lbuecfbqn"/><path class="ylik4k7po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:twitch"} {...others} />);
}

export default Component;
