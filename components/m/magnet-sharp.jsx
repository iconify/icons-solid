import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r11mf4_ss.css';
import '../../css/y/ydudqy-kh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r11mf4_ss"/><path class="ydudqy-kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:magnet-sharp"} {...others} />);
}

export default Component;
