import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-oo63zif.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="g-oo63zif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-umbrella-close-storm-rain-umbrella-close-weather"} {...others} />);
}

export default Component;
