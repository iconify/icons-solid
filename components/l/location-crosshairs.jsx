import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3dsvjbdk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l3dsvjbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:location-crosshairs"} {...others} />);
}

export default Component;
