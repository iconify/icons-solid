import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xattv9ben.css';
import '../../css/i/ige1qwxfq.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xattv9ben"/><path class="ige1qwxfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-snow-2-cloud-snow-snowfall-overcast-weather-precipitation-meteorology"} {...others} />);
}

export default Component;
