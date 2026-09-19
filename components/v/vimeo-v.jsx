import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0l14bbca.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="y0l14bbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:vimeo-v"} {...others} />);
}

export default Component;
