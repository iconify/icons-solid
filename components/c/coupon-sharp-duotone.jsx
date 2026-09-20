import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/boqwajrpv.css';
import '../../css/x/xfvg6rbri.css';
import '../../css/x/x89uejb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="boqwajrpv"/><path class="xfvg6rbri"/><path class="x89uejb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coupon-sharp-duotone"} {...others} />);
}

export default Component;
