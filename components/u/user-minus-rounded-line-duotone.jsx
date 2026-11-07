import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d49isd-3b.css';
import '../../css/r/rdnf-acrq.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/w/w4pjvzk9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d49isd-3b"/><path class="rdnf-acrq"/><circle class="dtl23o_xq"/><path class="w4pjvzk9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-minus-rounded-line-duotone"} {...others} />);
}

export default Component;
