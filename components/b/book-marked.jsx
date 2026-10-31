import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wsf49v6wa.css';
import '../../css/m/mdiw0tqfe.css';
import '../../css/x/xiphsthqf.css';
import '../../css/j/j-9wjbc3x.css';
import '../../css/z/zu9s9r67w.css';
import '../../css/e/eh60w3b0f.css';
import '../../css/z/z38ydzbcv.css';
import '../../css/d/d6cb9yb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wsf49v6wa"/><path class="mdiw0tqfe"/><path class="wm-shine xiphsthqf"/><path class="j-9wjbc3x wm-k"/><path class="wm-a zu9s9r67w"/><path class="eh60w3b0f"/><path class="z38ydzbcv"/><path class="d6cb9yb_v wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:book-marked"} {...others} />);
}

export default Component;
