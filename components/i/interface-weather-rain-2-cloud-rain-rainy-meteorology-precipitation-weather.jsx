import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1nckkbcd.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="c1nckkbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-rain-2-cloud-rain-rainy-meteorology-precipitation-weather"} {...others} />);
}

export default Component;
