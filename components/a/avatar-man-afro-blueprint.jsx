import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/artw48xjn.css';
import '../../css/j/jx0920bjc.css';
import '../../css/x/xxjaxvbua.css';
import '../../css/x/x3ijdbcbr.css';
import '../../css/e/ep0ats0jq.css';
import '../../css/p/pe518xlqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="artw48xjn wm-deco"/><path class="jx0920bjc wm-deco"/><path class="wm-deco xxjaxvbua"/><path class="wm-k x3ijdbcbr"/><path class="ep0ats0jq wm-a"/><path class="pe518xlqe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-afro-blueprint"} {...others} />);
}

export default Component;
