import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsv-5w5ym.css';
import '../../css/v/vfhoccbdf.css';
import '../../css/v/vwz4-ew1u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hsv-5w5ym"/><path class="vfhoccbdf"/><path class="vwz4-ew1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-sign-house-2"} {...others} />);
}

export default Component;
