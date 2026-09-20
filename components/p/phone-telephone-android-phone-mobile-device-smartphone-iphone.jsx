import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0k4426mb.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="z0k4426mb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:phone-telephone-android-phone-mobile-device-smartphone-iphone"} {...others} />);
}

export default Component;
