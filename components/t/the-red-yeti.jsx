import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p76hqtbzi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p76hqtbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:the-red-yeti"} {...others} />);
}

export default Component;
