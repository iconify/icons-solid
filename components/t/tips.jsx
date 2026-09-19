import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p70jf77ka.css';
import '../../css/k/k28phwblq.css';
import '../../css/p/p6znq_gmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p70jf77ka"/><path class="k28phwblq"/><path class="p6znq_gmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tips"} {...others} />);
}

export default Component;
