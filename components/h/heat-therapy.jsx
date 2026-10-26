import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vd1zo2b8e.css';
import '../../css/r/rspme6bbw.css';
import '../../css/v/vs-o0_phq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="vd1zo2b8e"/><path class="rspme6bbw"/><path class="vs-o0_phq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:heat-therapy"} {...others} />);
}

export default Component;
