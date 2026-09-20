import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b09u8ms8j.css';
import '../../css/x/xyyx10_gh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b09u8ms8j"/><path class="xyyx10_gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aliexpress-dark"} {...others} />);
}

export default Component;
