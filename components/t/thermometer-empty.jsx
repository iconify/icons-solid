import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxyu0ybfp.css';

const viewBox = {"width":256,"height":512};
const content = `<path class="cxyu0ybfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:thermometer-empty"} {...others} />);
}

export default Component;
