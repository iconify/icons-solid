import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h-kg1ebhc.css';
import '../../css/q/qp811ibeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h-kg1ebhc"/><path class="qp811ibeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-spark-02"} {...others} />);
}

export default Component;
