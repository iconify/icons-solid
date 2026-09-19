import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew63x3ajk.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ew63x3ajk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:glide-g"} {...others} />);
}

export default Component;
