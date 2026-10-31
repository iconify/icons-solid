import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xkmdx2jxy.css';
import '../../css/y/yls30eb4c.css';
import '../../css/p/pr4xpm72b.css';
import '../../css/o/o2bj_fb1i.css';
import '../../css/u/u8io24-1a.css';
import '../../css/y/yt_ikh9kc.css';
import '../../css/q/q-y6qnbev.css';
import '../../css/d/dge099bvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xkmdx2jxy"/><path class="yls30eb4c"/><path class="pr4xpm72b"/><path class="o2bj_fb1i"/><path class="u8io24-1a"/><path class="wm-s yt_ikh9kc"/><path class="q-y6qnbev wm-s"/><path class="dge099bvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-square-dot"} {...others} />);
}

export default Component;
