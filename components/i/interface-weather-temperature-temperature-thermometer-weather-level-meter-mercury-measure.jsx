import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1ileh14j.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="d1ileh14j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-temperature-temperature-thermometer-weather-level-meter-mercury-measure"} {...others} />);
}

export default Component;
