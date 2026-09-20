import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p01i7hbsz.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="p01i7hbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-laptop-device-laptop-electronics-computer-notebook"} {...others} />);
}

export default Component;
