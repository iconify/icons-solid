import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vym98jbvj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vym98jbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-first-quarter-moon-night-moon-first-half-quarter-time-weather"} {...others} />);
}

export default Component;
