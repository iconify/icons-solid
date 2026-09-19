import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/thfih0jyl.css';
import '../../css/e/elhf-ac1v.css';
import '../../css/b/bwd60po_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="thfih0jyl"/><path class="elhf-ac1v"/><path class="bwd60po_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:triangle-01"} {...others} />);
}

export default Component;
