import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzpqn2yzg.css';
import '../../css/e/efx70_a6m.css';
import '../../css/z/zzh-9abbr.css';
import '../../css/f/f5-jmthrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zzpqn2yzg"/><path class="efx70_a6m"/><path class="zzh-9abbr"/><path class="f5-jmthrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-dots-outline"} {...others} />);
}

export default Component;
