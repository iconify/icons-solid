import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz_tv8bwy.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="oz_tv8bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:tripadvisor"} {...others} />);
}

export default Component;
