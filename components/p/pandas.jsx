import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-e44lb4l.css';
import '../../css/z/z-7b66bwm.css';
import '../../css/w/w_6z06rni.css';
import '../../css/q/q_atkdb-c.css';
import '../../css/l/luz-girsp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u-e44lb4l"/><path class="z-7b66bwm"/><path class="w_6z06rni"/><path class="q_atkdb-c"/><path class="luz-girsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pandas"} {...others} />);
}

export default Component;
