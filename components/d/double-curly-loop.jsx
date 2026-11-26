import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/y/ynciedwtf.css';
import '../../css/k/kwiex7bof.css';
import '../../css/a/ag0okvcwa.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGHyfZFEKD" cx="73.4" cy="82.3" r="152" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="ynciedwtf"/><path fill="url(#SVGHyfZFEKD)" transform="matrix(2.3 0 0 2.3 23.023 23.023)" class="kwiex7bof"/><path class="ag0okvcwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:double-curly-loop"} {...others} />);
}

export default Component;
