import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wui7kdbtk.css';
import '../../css/x/x89uejb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="wui7kdbtk"/><path class="x89uejb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coupon-sharp"} {...others} />);
}

export default Component;
