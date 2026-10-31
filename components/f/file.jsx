import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vyd59tdzt.css';
import '../../css/z/z84mmwv5l.css';
import '../../css/l/l43o7mb-f.css';
import '../../css/c/cc9jnn-2r.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vyd59tdzt wm-k"/><path class="wm-shine z84mmwv5l"/><path class="l43o7mb-f wm-shine"/><path class="cc9jnn-2r wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file"} {...others} />);
}

export default Component;
