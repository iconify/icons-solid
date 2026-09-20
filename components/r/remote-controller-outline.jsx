import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d3mqu7bgu.css';
import '../../css/x/x8p3ew2md.css';
import '../../css/u/ugilmcclh.css';
import '../../css/p/pb5m6xycn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d3mqu7bgu"/><path class="x8p3ew2md"/><path class="ugilmcclh"/><path class="pb5m6xycn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-outline"} {...others} />);
}

export default Component;
