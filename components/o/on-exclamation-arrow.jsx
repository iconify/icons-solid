import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iakx74-2k.css';
import '../../css/b/bgmlavupy.css';
import '../../css/k/klswf2bxq.css';
import '../../css/v/vgx36vbyl.css';
import '../../css/j/ja4gk9hxz.css';
import '../../css/f/fbjkny_ai.css';
import '../../css/y/yufa_zber.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVG2Yhqttuf" cx="79" cy="62.2" r="120" gradientUnits="userSpaceOnUse"><stop offset="0" class="iakx74-2k"/><stop offset=".85" class="bgmlavupy"/><stop offset="1" class="bgmlavupy"/></radialGradient></defs><path class="klswf2bxq"/><path fill="url(#SVG2Yhqttuf)" transform="matrix(2.8 0 0 2.8 -28.016 -35.136)" class="vgx36vbyl"/><path class="ja4gk9hxz"/><path class="fbjkny_ai"/><path class="yufa_zber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:on-exclamation-arrow"} {...others} />);
}

export default Component;
