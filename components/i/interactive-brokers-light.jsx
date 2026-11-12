import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-llkv2cb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/c/ccqymhpos.css';
import '../../css/u/u-67px-7k.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGMkf2ThMc" x1="351.3" x2="124.8" y1="387.2" y2="387.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGMkf2ThMc)" class="ccqymhpos"/><path class="u-67px-7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:interactive-brokers-light"} {...others} />);
}

export default Component;
