import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuul9lbyg.css';
import '../../css/f/fikjb1blf.css';
import '../../css/x/x86lldbvo.css';
import '../../css/f/f75zwb5hw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xuul9lbyg"/><path class="fikjb1blf"/><path class="x86lldbvo"/><path class="f75zwb5hw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:heart-calendar"} {...others} />);
}

export default Component;
