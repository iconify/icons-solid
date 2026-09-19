import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/smdh3r6ck.css';
import '../../css/a/az_1ir_pw.css';
import '../../css/n/nc92rkb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="smdh3r6ck"/><path class="az_1ir_pw"/><path class="nc92rkb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:poop"} {...others} />);
}

export default Component;
