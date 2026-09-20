import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_jqgob4j.css';
import '../../css/p/ps5hxpumy.css';
import '../../css/t/t71ss4emm.css';
import '../../css/l/ly65xvbyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s_jqgob4j"/><path class="ps5hxpumy"/><path class="t71ss4emm"/><path class="ly65xvbyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:radio-antenna-handle"} {...others} />);
}

export default Component;
