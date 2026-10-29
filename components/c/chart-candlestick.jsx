import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dmyvzab5e.css';
import '../../css/e/erd2ikbxb.css';
import '../../css/q/qb25wmb8h.css';
import '../../css/v/v88yprb2l.css';
import '../../css/t/tf4p9tbpy.css';
import '../../css/l/l950yrb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dmyvzab5e"/><path class="erd2ikbxb wm-a"/><path class="qb25wmb8h"/><path class="v88yprb2l wm-a"/><path class="tf4p9tbpy"/><path class="l950yrb2b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-candlestick"} {...others} />);
}

export default Component;
