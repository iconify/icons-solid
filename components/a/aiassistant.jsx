import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnvl1_o4f.css';
import '../../css/j/jt_7erraj.css';
import '../../css/j/j14hckbdq.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGMOawNdFh" x1="4.746" x2="70.607" y1="8.636" y2="59.748" gradientTransform="scale(2.66667)" gradientUnits="userSpaceOnUse"><stop class="wnvl1_o4f"/><stop offset="1" class="jt_7erraj"/></linearGradient></defs><path fill="url(#SVGMOawNdFh)" class="j14hckbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:aiassistant"} {...others} />);
}

export default Component;
