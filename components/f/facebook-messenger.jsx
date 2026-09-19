import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf86pn3hu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jf86pn3hu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:facebook-messenger"} {...others} />);
}

export default Component;
