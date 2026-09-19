import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l2iew4b8d.css';
import '../../css/h/hcev0sb5i.css';
import '../../css/j/j7v6lsk2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l2iew4b8d"/><path class="hcev0sb5i"/><path class="j7v6lsk2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:floor-plan"} {...others} />);
}

export default Component;
