import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhy7nh5dn.css';
import '../../css/n/nlmsi6etm.css';
import '../../css/p/pab16wdqn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vhy7nh5dn"/><path class="nlmsi6etm"/><path class="pab16wdqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:waxingcrescentmoon"} {...others} />);
}

export default Component;
