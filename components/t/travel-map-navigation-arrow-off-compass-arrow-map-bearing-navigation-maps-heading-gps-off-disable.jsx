import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkqkbp-3k.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rkqkbp-3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-map-navigation-arrow-off-compass-arrow-map-bearing-navigation-maps-heading-gps-off-disable"} {...others} />);
}

export default Component;
