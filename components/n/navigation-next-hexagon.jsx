import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjj31sjfb.css';
import '../../css/n/nqcq8kbwa.css';
import '../../css/f/fyw2drbkc.css';
import '../../css/m/mktzl83dj.css';
import '../../css/e/e89ugbcyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qjj31sjfb"/><path class="nqcq8kbwa"/><path class="fyw2drbkc"/><path class="mktzl83dj"/><path class="e89ugbcyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:navigation-next-hexagon"} {...others} />);
}

export default Component;
