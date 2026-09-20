import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln3awga8d.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ln3awga8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-map-triangle-flag-navigation-map-maps-flag-gps-location-destination-goal"} {...others} />);
}

export default Component;
