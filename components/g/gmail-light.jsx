import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/j/jt69e0bks.css';
import '../../css/u/u7cv2seej.css';
import '../../css/a/ahgo_fbcw.css';
import '../../css/y/yotexyb-d.css';
import '../../css/z/zdt08wb2e.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="jt69e0bks"/><path class="u7cv2seej"/><path class="ahgo_fbcw"/><path class="yotexyb-d"/><path class="zdt08wb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:gmail-light"} {...others} />);
}

export default Component;
