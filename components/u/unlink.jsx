import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jrfql7bke.css';
import '../../css/w/w4qxw7b5w.css';
import '../../css/w/wkg0a0bgk.css';
import '../../css/e/e0izkne-h.css';
import '../../css/u/unkvyfx-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jrfql7bke"/><path class="w4qxw7b5w"/><path class="wkg0a0bgk wm-shine"/><path class="e0izkne-h wm-k"/><path class="unkvyfx-l wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:unlink"} {...others} />);
}

export default Component;
