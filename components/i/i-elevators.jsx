import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk5v1ugen.css';
import '../../css/v/v0terl0zp.css';
import '../../css/k/krqyf7jcs.css';
import '../../css/v/vr_wmi0nv.css';
import '../../css/p/pu63pwb2t.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="dk5v1ugen"/><path class="v0terl0zp"/><path class="krqyf7jcs"/><path class="vr_wmi0nv"/><path class="pu63pwb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-elevators"} {...others} />);
}

export default Component;
