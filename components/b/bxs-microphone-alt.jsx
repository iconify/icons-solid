import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f89pw3byy.css';
import '../../css/d/d2jw_nbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f89pw3byy"/><path class="d2jw_nbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-microphone-alt"} {...others} />);
}

export default Component;
