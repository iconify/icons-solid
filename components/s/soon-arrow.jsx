import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iakx74-2k.css';
import '../../css/b/bgmlavupy.css';
import '../../css/g/gdlj141wo.css';
import '../../css/n/nt1nkohqh.css';
import '../../css/c/cb2bdtlge.css';
import '../../css/u/un8e6hbsq.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVG2Yhqttuf" cx="79" cy="62.2" r="120" gradientUnits="userSpaceOnUse"><stop offset="0" class="iakx74-2k"/><stop offset=".85" class="bgmlavupy"/><stop offset="1" class="bgmlavupy"/></radialGradient></defs><path class="gdlj141wo"/><path fill="url(#SVG2Yhqttuf)" transform="matrix(2.8 0 0 2.8 -28.016 -35.136)" class="nt1nkohqh"/><path class="cb2bdtlge"/><path class="un8e6hbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:soon-arrow"} {...others} />);
}

export default Component;
