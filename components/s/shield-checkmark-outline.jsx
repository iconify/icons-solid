import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0ful6buz.css';
import '../../css/i/iy-sd1yvj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y0ful6buz"/><path class="iy-sd1yvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:shield-checkmark-outline"} {...others} />);
}

export default Component;
