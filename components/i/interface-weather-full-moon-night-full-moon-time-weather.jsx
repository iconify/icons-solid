import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0tuhogfj.css';

const viewBox = {"width":14,"height":14};
const content = `<circle class="i0tuhogfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-full-moon-night-full-moon-time-weather"} {...others} />);
}

export default Component;
