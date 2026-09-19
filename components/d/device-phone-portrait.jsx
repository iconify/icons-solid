import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myc39_jik.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="myc39_jik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:device-phone-portrait"} {...others} />);
}

export default Component;
