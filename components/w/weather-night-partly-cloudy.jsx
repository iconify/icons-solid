import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_l0clr8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_l0clr8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:weather-night-partly-cloudy"} {...others} />);
}

export default Component;
