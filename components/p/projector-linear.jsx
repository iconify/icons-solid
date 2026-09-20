import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sgr_f8btx.css';
import '../../css/m/mzgayy21e.css';
import '../../css/i/iu2_5aclf.css';
import '../../css/x/xa3dxb-md.css';
import '../../css/p/p2fvfob4y.css';
import '../../css/h/h0mdmlb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sgr_f8btx"/><path class="mzgayy21e"/><path class="iu2_5aclf"/><path class="xa3dxb-md"/><path class="p2fvfob4y"/><path class="h0mdmlb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:projector-linear"} {...others} />);
}

export default Component;
