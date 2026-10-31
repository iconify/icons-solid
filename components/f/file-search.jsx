import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw777i2dc.css';
import '../../css/p/ppp_-jb5h.css';
import '../../css/d/dos_avbnx.css';
import '../../css/k/k64lvxbqt.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jw777i2dc wm-k"/><path class="ppp_-jb5h wm-shine"/><path class="dos_avbnx wm-shine"/><path class="k64lvxbqt wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file-search"} {...others} />);
}

export default Component;
