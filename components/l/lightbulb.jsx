import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/u/uhm3i1jlb.css';
import '../../css/k/kk7jzcbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="uhm3i1jlb"/><path class="kk7jzcbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:lightbulb"} {...others} />);
}

export default Component;
