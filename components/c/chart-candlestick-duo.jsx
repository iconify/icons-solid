import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qjvj2ib0t.css';
import '../../css/t/tzhb1vbig.css';
import '../../css/w/wnz0iqbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qjvj2ib0t"/><path class="tzhb1vbig wm-a"/><path class="wnz0iqbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-candlestick-duo"} {...others} />);
}

export default Component;
