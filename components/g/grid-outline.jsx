import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abmtkcbyd.css';
import '../../css/c/ctjrvzbee.css';
import '../../css/q/q_c-66bgc.css';
import '../../css/z/zcu-748sy.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="abmtkcbyd"/><rect class="ctjrvzbee"/><rect class="q_c-66bgc"/><rect class="zcu-748sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:grid-outline"} {...others} />);
}

export default Component;
