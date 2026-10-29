import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pn10iob8l.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/l/lqdy3rb7m.css';
import '../../css/h/h0g_bvisu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pn10iob8l"/><path class="qr4ochb5c wm-s"/><path class="lqdy3rb7m"/><path class="h0g_bvisu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-off-duo"} {...others} />);
}

export default Component;
