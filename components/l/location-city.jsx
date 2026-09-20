import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts5-r4bvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ts5-r4bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:location-city"} {...others} />);
}

export default Component;
