import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/enjc3_bdq.css';
import '../../css/m/mjt0l_brl.css';
import '../../css/f/fq5xfrb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="enjc3_bdq"/><path class="mjt0l_brl"/><path class="fq5xfrb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:credit-card-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
