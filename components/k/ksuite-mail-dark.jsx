import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfv7kibpo.css';
import '../../css/d/dfc5wbcbr.css';
import '../../css/u/u_l71ebni.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mfv7kibpo"/><path class="dfc5wbcbr"/><path class="u_l71ebni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-mail-dark"} {...others} />);
}

export default Component;
