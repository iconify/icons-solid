import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yfdxhcbxe.css';
import '../../css/g/gvtbf6uqv.css';
import '../../css/p/pwz0xh32h.css';
import '../../css/q/qren0kb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yfdxhcbxe"/><path class="gvtbf6uqv"/><path class="pwz0xh32h"/><path class="qren0kb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-2-broken"} {...others} />);
}

export default Component;
