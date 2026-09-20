import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ody3_jmli.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ody3_jmli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-third-quarter-moon-night-moon-third-half-quarter-time-weather"} {...others} />);
}

export default Component;
