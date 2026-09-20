import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm9um7bxg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tm9um7bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-rain-1-cloud-rain-rainy-meteorology-precipitation-weather"} {...others} />);
}

export default Component;
