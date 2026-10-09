import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wub9asb0k.css';
import '../../css/s/sgi1483fh.css';
import '../../css/v/vxtaxskvy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wub9asb0k"/><path class="sgi1483fh"/><path class="vxtaxskvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:feed-in-20"} {...others} />);
}

export default Component;
