import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i8jsult2w.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/g/gs99q5biw.css';
import '../../css/h/hayg57blh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="i8jsult2w wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="gs99q5biw wm-k"/><path class="hayg57blh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-medical-blueprint"} {...others} />);
}

export default Component;
