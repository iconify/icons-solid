import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsg5j7ibl.css';
import '../../css/d/d_cpnh_xd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lsg5j7ibl"/><path class="d_cpnh_xd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:checkmark-circle-outline"} {...others} />);
}

export default Component;
