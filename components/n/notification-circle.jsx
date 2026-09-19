import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ix74hpb0f.css';
import '../../css/d/dicptfbfk.css';
import '../../css/x/xei8vkhxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ix74hpb0f"/><path class="dicptfbfk"/><path class="xei8vkhxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-circle"} {...others} />);
}

export default Component;
