import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njy-ywcwy.css';
import '../../css/l/l_shvbb8k.css';
import '../../css/g/gkcr4nuis.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGDxufMddq" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="njy-ywcwy"/><stop offset="1" class="l_shvbb8k"/></linearGradient><path fill="url(#SVGDxufMddq)" class="gkcr4nuis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:slskd"} {...others} />);
}

export default Component;
