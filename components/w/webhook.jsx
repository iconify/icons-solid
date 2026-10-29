import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q-ome_08g.css';
import '../../css/d/dg2drhi8k.css';
import '../../css/a/auv6lqb6w.css';
import '../../css/f/fft4yz3uq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q-ome_08g"/><path class="dg2drhi8k"/><path class="auv6lqb6w"/><path class="fft4yz3uq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:webhook"} {...others} />);
}

export default Component;
