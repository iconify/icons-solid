import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs8695biw.css';
import '../../css/e/e402xjxdr.css';
import '../../css/k/k1o0l22my.css';
import '../../css/k/ksce4ccva.css';
import '../../css/j/jjjqjrb0f.css';
import '../../css/y/ysguyp_mq.css';
import '../../css/u/uh5uv8b8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gs8695biw wm-k"/><path class="e402xjxdr wm-deco"/><path class="k1o0l22my wm-k"/><path class="ksce4ccva wm-shadow"/><path class="jjjqjrb0f wm-shine"/><path class="wm-shine ysguyp_mq"/><path class="uh5uv8b8c wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:inbox"} {...others} />);
}

export default Component;
