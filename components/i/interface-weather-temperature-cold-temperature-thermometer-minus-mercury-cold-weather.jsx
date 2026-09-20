import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzqiss7xx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kzqiss7xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-temperature-cold-temperature-thermometer-minus-mercury-cold-weather"} {...others} />);
}

export default Component;
