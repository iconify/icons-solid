import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/ki-is0djc.css';
import '../../css/v/vfu4_2uej.css';
import '../../css/k/kp8s8yb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ki-is0djc"/><path class="vfu4_2uej"/><path class="kp8s8yb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cutter"} {...others} />);
}

export default Component;
