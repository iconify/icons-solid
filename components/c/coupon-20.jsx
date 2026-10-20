import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl41xxbat.css';
import '../../css/a/a8eh2dnic.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tl41xxbat"/><path class="a8eh2dnic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coupon-20"} {...others} />);
}

export default Component;
