import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww3upyb6j.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ww3upyb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:perbyte"} {...others} />);
}

export default Component;
