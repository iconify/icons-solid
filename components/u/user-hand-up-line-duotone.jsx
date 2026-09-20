import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cxv0e2blx.css';
import '../../css/m/mmqgyxbpq.css';
import '../../css/d/dtl23o_xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cxv0e2blx"/><path class="mmqgyxbpq"/><circle class="dtl23o_xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-hand-up-line-duotone"} {...others} />);
}

export default Component;
