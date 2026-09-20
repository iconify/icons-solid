import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m8netx35k.css';
import '../../css/p/pve7dkb2j.css';
import '../../css/q/qgl0b2pvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m8netx35k"/><path class="pve7dkb2j"/><path class="qgl0b2pvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-shake-line-duotone"} {...others} />);
}

export default Component;
