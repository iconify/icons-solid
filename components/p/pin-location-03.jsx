import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/i/iy9e42njx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="dtl23o_xq"/><path class="iy9e42njx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pin-location-03"} {...others} />);
}

export default Component;
