import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-3knu0fx.css';
import '../../css/v/v4vyuabuo.css';
import '../../css/n/n4x3occyp.css';
import '../../css/s/s69o1ib8n.css';
import '../../css/q/qr48up8bl.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGMhhfWdCG" x1="80" x2="432" y1="450" y2="66" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="k-3knu0fx"/><stop offset="1" class="v4vyuabuo"/></linearGradient><path fill="url(#SVGMhhfWdCG)" class="n4x3occyp"/><path class="s69o1ib8n"/><path class="qr48up8bl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:foldergram"} {...others} />);
}

export default Component;
