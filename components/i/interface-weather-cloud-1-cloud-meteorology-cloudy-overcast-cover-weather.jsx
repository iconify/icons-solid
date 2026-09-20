import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lenh45b2v.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="lenh45b2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-cloud-1-cloud-meteorology-cloudy-overcast-cover-weather"} {...others} />);
}

export default Component;
