import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waxltl5fo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="waxltl5fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:home-thermometer-outline"} {...others} />);
}

export default Component;
