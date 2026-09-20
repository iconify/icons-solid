import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-llkv2cb.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/v/vqe6txv6a.css';
import '../../css/y/yxzgilblw.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGhe5mYVCm" x1="8.509" x2="499.251" y1="503.491" y2="12.749" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".996" class="kckc1iwlf"/></linearGradient><path fill="url(#SVGhe5mYVCm)" class="vqe6txv6a"/><path class="yxzgilblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jetbrains-light"} {...others} />);
}

export default Component;
