import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6b1lpqlu.css';
import '../../css/p/p3xnq8bsq.css';
import '../../css/r/rpe_336wm.css';
import '../../css/v/v3p8b4ben.css';
import '../../css/d/d5vhom0tv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="h6b1lpqlu"/><path class="p3xnq8bsq"/><path class="rpe_336wm"/><path class="v3p8b4ben"/><path class="d5vhom0tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:firebase-wordmark"} {...others} />);
}

export default Component;
