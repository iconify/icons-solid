import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eeywum6wo.css';

const viewBox = {"width":1408,"height":1408};
const content = `<path class="eeywum6wo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:location-arrow"} {...others} />);
}

export default Component;
