import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/d/dd77q5buj.css';
import '../../css/u/udn08f86y.css';
import '../../css/z/z_rx2jgli.css';
import '../../css/h/ht09lzbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="if_fr7tub"/><path class="dd77q5buj"/><path class="udn08f86y"/><path class="z_rx2jgli"/><path class="ht09lzbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-candlestick"} {...others} />);
}

export default Component;
