import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/l/lqupblb0q.css';
import '../../css/v/vx_l23zwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="lqupblb0q"/><path class="vx_l23zwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:special-effects-bold-duotone"} {...others} />);
}

export default Component;
