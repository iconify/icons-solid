import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ub4u4kwda.css';
import '../../css/u/u7s_38bqj.css';
import '../../css/o/ozqj7zbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ub4u4kwda"/><path class="u7s_38bqj"/><path class="ozqj7zbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:curtains-open"} {...others} />);
}

export default Component;
