import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_v_pfbhf.css';
import '../../css/j/jkpsqcvpy.css';
import '../../css/n/nux0isb3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e_v_pfbhf"/><path class="jkpsqcvpy"/><path class="nux0isb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:home-information"} {...others} />);
}

export default Component;
