import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jd_vobbyd.css';
import '../../css/f/frg622blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="jd_vobbyd"/><path class="frg622blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:link"} {...others} />);
}

export default Component;
