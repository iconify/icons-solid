import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq18cp_ys.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xq18cp_ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-map-location-target-off-target-location-map-off-services-navigation-maps-gps"} {...others} />);
}

export default Component;
