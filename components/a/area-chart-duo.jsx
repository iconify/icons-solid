import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ema-raczb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fc_9on64f.css';
import '../../css/r/rdsn7pb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ema-raczb secondary"/><g class="dt0cm9dhy primary"><path class="fc_9on64f"/><path class="rdsn7pb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:area-chart-duo"} {...others} />);
}

export default Component;
