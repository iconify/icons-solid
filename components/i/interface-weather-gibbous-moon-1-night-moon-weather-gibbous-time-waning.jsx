import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv9d3tbjp.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rv9d3tbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-gibbous-moon-1-night-moon-weather-gibbous-time-waning"} {...others} />);
}

export default Component;
