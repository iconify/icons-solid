import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o2jno2buj.css';
import '../../css/i/iru49qbqh.css';
import '../../css/j/jny2pkb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o2jno2buj"/><path class="iru49qbqh"/><path class="jny2pkb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:save-all"} {...others} />);
}

export default Component;
