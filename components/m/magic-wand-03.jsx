import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xxftuhv7v.css';
import '../../css/i/iv91gxb2w.css';
import '../../css/t/t9behylkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xxftuhv7v"/><path class="iv91gxb2w"/><path class="t9behylkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:magic-wand-03"} {...others} />);
}

export default Component;
