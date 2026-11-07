import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xec5t4rsb.css';
import '../../css/p/p4g88i3da.css';
import '../../css/p/p0u9jubtm.css';
import '../../css/r/rultmacqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xec5t4rsb"/><path class="p4g88i3da"/><path class="p0u9jubtm"/><path class="rultmacqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-line-duotone"} {...others} />);
}

export default Component;
