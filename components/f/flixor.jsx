import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr-9cveng.css';
import '../../css/d/dvatmlb6v.css';
import '../../css/u/udeylcb8n.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGpkCMtczw" x1="-50.529" x2="-43.214" y1="646.75" y2="646.75" gradientTransform="matrix(70 0 0 -60 3537 39061)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hr-9cveng"/><stop offset="1" class="dvatmlb6v"/></linearGradient><path fill="url(#SVGpkCMtczw)" class="udeylcb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flixor"} {...others} />);
}

export default Component;
