import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6wljthwv.css';
import '../../css/b/bhxknwbqs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i6wljthwv"/><path class="bhxknwbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:chuck"} {...others} />);
}

export default Component;
