import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbsiz1bro.css';
import '../../css/r/rt2t23vus.css';
import '../../css/m/mav5s0-rh.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="fbsiz1bro"/><path class="rt2t23vus"/><path class="mav5s0-rh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ru-4x3"} {...others} />);
}

export default Component;
