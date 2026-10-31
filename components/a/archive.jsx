import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mwputlbfe.css';
import '../../css/u/uzvsd5btx.css';
import '../../css/g/g-mr5gb2b.css';
import '../../css/l/lt6_d_vnp.css';
import '../../css/v/vjpc1gbig.css';
import '../../css/m/mtriq144g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mwputlbfe wm-shadow"/><path class="uzvsd5btx"/><path class="g-mr5gb2b"/><path class="lt6_d_vnp"/><path class="vjpc1gbig"/><path class="mtriq144g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:archive"} {...others} />);
}

export default Component;
