import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-6av_bac.css';
import '../../css/g/gw0lhg8wu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v-6av_bac"/><path class="gw0lhg8wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:usb"} {...others} />);
}

export default Component;
