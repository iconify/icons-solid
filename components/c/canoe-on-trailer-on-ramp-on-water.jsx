import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx-nx6b6h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qx-nx6b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:canoe-on-trailer-on-ramp-on-water"} {...others} />);
}

export default Component;
