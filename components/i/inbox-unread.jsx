import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vuw-vtbcg.css';
import '../../css/i/ix74hpb0f.css';
import '../../css/m/mrkbx1baw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vuw-vtbcg"/><path class="ix74hpb0f"/><path class="mrkbx1baw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:inbox-unread"} {...others} />);
}

export default Component;
