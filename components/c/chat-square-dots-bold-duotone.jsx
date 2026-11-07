import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfpn6w7ca.css';
import '../../css/f/f5-jmthrp.css';
import '../../css/z/zzh-9abbr.css';
import '../../css/e/efx70_a6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfpn6w7ca"/><path class="f5-jmthrp"/><path class="zzh-9abbr"/><path class="efx70_a6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-dots-bold-duotone"} {...others} />);
}

export default Component;
