import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pebb46n6h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="pebb46n6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-map-navigation-arrow-compass-arrow-map-bearing-navigation-maps-heading-gps"} {...others} />);
}

export default Component;
