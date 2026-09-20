import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/z/z_4m6ybwr.css';
import '../../css/k/k8tcf1rtp.css';
import '../../css/o/o2aiptqim.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVGntW3UdkA" cx="109.343" cy="539.821" r="6.73" gradientTransform="matrix(0 -64.2714 43.3138 0 -23063.785 7483.993)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="z_4m6ybwr"/></radialGradient><path fill="url(#SVGntW3UdkA)" class="k8tcf1rtp"/><radialGradient id="SVGxN5at3jQ" cx="109.359" cy="534.613" r="6.73" gradientTransform="matrix(0 64.2714 -43.3138 0 23350.253 -6972.226)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="z_4m6ybwr"/></radialGradient><path fill="url(#SVGxN5at3jQ)" class="o2aiptqim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sync-in-light"} {...others} />);
}

export default Component;
