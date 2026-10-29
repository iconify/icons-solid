import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vzkm232hd.css';
import '../../css/s/s9ip9ibiv.css';
import '../../css/g/g25ktr9iv.css';
import '../../css/t/tkxcykbul.css';
import '../../css/r/rvvxdgw4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vzkm232hd wm-deco"/><path class="s9ip9ibiv wm-deco"/><path class="g25ktr9iv wm-deco"/><path class="tkxcykbul wm-k"/><path class="rvvxdgw4h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:face-mask-blueprint"} {...others} />);
}

export default Component;
