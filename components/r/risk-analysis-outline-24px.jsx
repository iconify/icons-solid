import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qco8l2btt.css';
import '../../css/u/u7wqe2tmu.css';
import '../../css/m/mvxv-acdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qco8l2btt"/><path clip-rule="evenodd" class="u7wqe2tmu"/><path class="mvxv-acdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:risk-analysis-outline-24px"} {...others} />);
}

export default Component;
