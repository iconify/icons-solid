import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2bw2kbzy.css';
import '../../css/u/uu3kzorls.css';
import '../../css/c/cppqzcbcg.css';
import '../../css/r/ri3dx8gmy.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c2bw2kbzy wm-k"/><path class="uu3kzorls wm-shine"/><path class="cppqzcbcg wm-shine"/><path class="ri3dx8gmy wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file-chart"} {...others} />);
}

export default Component;
