import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nim9k1fly.css';
import '../../css/e/e3zi59zio.css';
import '../../css/x/xg063toua.css';
import '../../css/s/s1h4ygs9z.css';
import '../../css/q/qmnox1bpl.css';
import '../../css/z/z-xy10bpg.css';
import '../../css/o/o1k0c5ieu.css';
import '../../css/n/nrhd71bhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nim9k1fly"/><path class="e3zi59zio"/><path class="xg063toua"/><path class="s1h4ygs9z wm-a"/><path class="qmnox1bpl"/><path class="z-xy10bpg"/><path class="o1k0c5ieu"/><path class="nrhd71bhf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laddoo-duo"} {...others} />);
}

export default Component;
