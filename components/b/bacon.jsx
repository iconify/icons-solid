import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jchf41bhk.css';
import '../../css/a/aaj2y0por.css';
import '../../css/u/ulvtbqbjb.css';
import '../../css/t/t2492973d.css';
import '../../css/h/h_mratnxh.css';
import '../../css/v/v9s2o3b3l.css';
import '../../css/s/s37u-m7jk.css';
import '../../css/g/gs-m54dqu.css';
import '../../css/b/bwo-zlmgz.css';
import '../../css/k/kj3-4tbva.css';
import '../../css/p/pjpeyacjf.css';
import '../../css/k/k8a4ivbye.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGbJQsNdFs" cx="73.9" cy="63" r="149.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="jchf41bhk"/><stop offset=".85" class="aaj2y0por"/><stop offset="1" class="aaj2y0por"/></radialGradient><radialGradient id="SVGmwCcEdjh" cx="73.9" cy="135" r="149.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="jchf41bhk"/><stop offset=".85" class="aaj2y0por"/><stop offset="1" class="aaj2y0por"/></radialGradient></defs><path class="ulvtbqbjb"/><path fill="url(#SVGbJQsNdFs)" transform="matrix(2.4 0 0 2.4 17.015 -11.925)" class="t2492973d"/><path class="h_mratnxh"/><path class="v9s2o3b3l"/><path class="s37u-m7jk"/><path class="gs-m54dqu"/><path fill="url(#SVGmwCcEdjh)" transform="matrix(2.4 0 0 2.4 17.015 -11.925)" class="bwo-zlmgz"/><path class="kj3-4tbva"/><path class="pjpeyacjf"/><path class="k8a4ivbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:bacon"} {...others} />);
}

export default Component;
