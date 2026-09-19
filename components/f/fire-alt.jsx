import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcv5y0bhe.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="dcv5y0bhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:fire-alt"} {...others} />);
}

export default Component;
