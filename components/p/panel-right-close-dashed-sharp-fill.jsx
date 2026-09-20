import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v0dh77b3j.css';
import '../../css/e/ess6f3oak.css';
import '../../css/q/q_i5o_bfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="v0dh77b3j"/><path class="ess6f3oak"/><path class="q_i5o_bfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-right-close-dashed-sharp-fill"} {...others} />);
}

export default Component;
