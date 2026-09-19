import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y3g0aibte.css';
import '../../css/f/f_6w66b_f.css';
import '../../css/k/k7uvfrbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y3g0aibte"/><path class="f_6w66b_f"/><path class="k7uvfrbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:function-of-x"} {...others} />);
}

export default Component;
