import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxd4l03gp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sxd4l03gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:reorder-three-sharp"} {...others} />);
}

export default Component;
