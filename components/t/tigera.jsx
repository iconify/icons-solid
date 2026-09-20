import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy7_7wa8u.css';
import '../../css/e/e507l5bmm.css';
import '../../css/c/cnmlbv_ah.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGp4mlkcnW" x1="0" x2="512" y1="257.97" y2="257.97" gradientTransform="matrix(1 0 0 -1 0 513.97)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gy7_7wa8u"/><stop offset="1" class="e507l5bmm"/></linearGradient><path fill="url(#SVGp4mlkcnW)" class="cnmlbv_ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tigera"} {...others} />);
}

export default Component;
