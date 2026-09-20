import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk2cr0b6j.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rk2cr0b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-map-rectangle-flag-navigation-map-maps-flag-gps-location-destination-goal"} {...others} />);
}

export default Component;
