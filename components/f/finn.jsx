import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6q3dwxxu.css';
import '../../css/x/xtwgksb_s.css';
import '../../css/r/rp7oy-b8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d6q3dwxxu"/><path class="xtwgksb_s"/><path class="rp7oy-b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:finn"} {...others} />);
}

export default Component;
