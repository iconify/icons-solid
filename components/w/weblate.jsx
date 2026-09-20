import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9jnagbbl.css';
import '../../css/q/qthc_55up.css';
import '../../css/j/j7t5hzqcu.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGsEGyae0g" x1="0" x2="349.491" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="f9jnagbbl"/><stop offset="1" class="qthc_55up"/></linearGradient><path fill="url(#SVGsEGyae0g)" class="j7t5hzqcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:weblate"} {...others} />);
}

export default Component;
