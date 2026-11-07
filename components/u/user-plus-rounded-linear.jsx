import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/l/ll9hsm7xd.css';
import '../../css/u/uvor06boi.css';
import '../../css/r/rdnf-acrq.css';
import '../../css/m/mmetfzbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="ll9hsm7xd"/><path class="uvor06boi"/><path class="rdnf-acrq"/><path class="mmetfzbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-plus-rounded-linear"} {...others} />);
}

export default Component;
