import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuzlowbon.css';
import '../../css/m/mrseh9rmw.css';
import '../../css/o/o0lf53bjy.css';
import '../../css/o/o80fjacmm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fuzlowbon"/><path class="mrseh9rmw"/><path class="o0lf53bjy"/><path class="o80fjacmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tangerine"} {...others} />);
}

export default Component;
