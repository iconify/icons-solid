import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en56epedd.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="en56epedd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-umbrella-storm-rain-umbrella-open-weather"} {...others} />);
}

export default Component;
