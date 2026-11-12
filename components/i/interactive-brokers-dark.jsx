import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sll_zg-uo.css';
import '../../css/c/ccqymhpos.css';
import '../../css/l/l6xvejonm.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGygEO3diJ" x1="351.3" x2="124.8" y1="387.2" y2="387.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="sll_zg-uo"/><stop offset="1"/></linearGradient><path fill="url(#SVGygEO3diJ)" class="ccqymhpos"/><path class="l6xvejonm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:interactive-brokers-dark"} {...others} />);
}

export default Component;
