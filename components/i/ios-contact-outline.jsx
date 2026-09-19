import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-g5_2e4k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x-g5_2e4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-contact-outline"} {...others} />);
}

export default Component;
