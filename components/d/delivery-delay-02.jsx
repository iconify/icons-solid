import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q_2ja2uig.css';
import '../../css/n/n1saj_bpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q_2ja2uig"/><path class="n1saj_bpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delivery-delay-02"} {...others} />);
}

export default Component;
