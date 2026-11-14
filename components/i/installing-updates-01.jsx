import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aoq_q1b8r.css';
import '../../css/x/xhh8lwb8s.css';
import '../../css/s/s21fe3vrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aoq_q1b8r"/><path class="xhh8lwb8s"/><path class="s21fe3vrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:installing-updates-01"} {...others} />);
}

export default Component;
