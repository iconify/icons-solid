import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cd-w4tbuq.css';
import '../../css/k/kf39jph-w.css';
import '../../css/g/gpyurzb-c.css';
import '../../css/r/r0502pb9f.css';
import '../../css/p/ponhs01dq.css';
import '../../css/j/jju-pubul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cd-w4tbuq wm-shadow"/><path class="kf39jph-w"/><path class="gpyurzb-c"/><path class="r0502pb9f"/><path class="ponhs01dq"/><path class="jju-pubul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sticky-note"} {...others} />);
}

export default Component;
