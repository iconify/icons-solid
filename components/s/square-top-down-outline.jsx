import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rszymacgm.css';
import '../../css/l/laen_wd4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rszymacgm"/><path class="laen_wd4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-top-down-outline"} {...others} />);
}

export default Component;
