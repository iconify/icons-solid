import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l5s0pfbji.css';
import '../../css/r/rdnf-acrq.css';
import '../../css/j/j0u-9o6ft.css';
import '../../css/d/dtl23o_xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l5s0pfbji"/><path class="rdnf-acrq"/><path class="j0u-9o6ft"/><circle class="dtl23o_xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-block-rounded-line-duotone"} {...others} />);
}

export default Component;
