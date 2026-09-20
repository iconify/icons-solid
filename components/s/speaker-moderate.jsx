import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byy98xbhl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="byy98xbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:speaker-moderate"} {...others} />);
}

export default Component;
