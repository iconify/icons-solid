import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2-g-ztup.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="w2-g-ztup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:location-arrow"} {...others} />);
}

export default Component;
