import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9xgfxb_x.css';
import '../../css/x/xw-7eg54w.css';
import '../../css/e/eb3xgcuwx.css';
import '../../css/i/id-m5w0yx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d9xgfxb_x wm-shadow"/><path class="xw-7eg54w"/><path class="eb3xgcuwx"/><path class="id-m5w0yx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:banknote"} {...others} />);
}

export default Component;
