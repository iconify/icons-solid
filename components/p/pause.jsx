import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kpmc2p_8f.css';
import '../../css/r/rm2jdlnwc.css';
import '../../css/u/urlzan7ys.css';
import '../../css/q/q08kq17fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kpmc2p_8f"/><path class="rm2jdlnwc wm-shine"/><path class="urlzan7ys"/><path class="q08kq17fp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pause"} {...others} />);
}

export default Component;
