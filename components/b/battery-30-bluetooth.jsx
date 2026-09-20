import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdz93i2eu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdz93i2eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:battery-30-bluetooth"} {...others} />);
}

export default Component;
