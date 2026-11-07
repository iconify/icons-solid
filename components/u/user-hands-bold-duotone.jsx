import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp66iosrg.css';
import '../../css/e/efszygbcr.css';
import '../../css/j/j855t9sbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jp66iosrg"/><path class="efszygbcr"/><path class="j855t9sbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-hands-bold-duotone"} {...others} />);
}

export default Component;
