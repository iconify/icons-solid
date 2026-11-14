import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/ydcpvzc8x.css';
import '../../css/v/vrptfnbdj.css';
import '../../css/x/x-dt5zbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ydcpvzc8x"/><path class="vrptfnbdj"/><path class="x-dt5zbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scratch-card"} {...others} />);
}

export default Component;
