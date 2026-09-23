import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/evxcoq2mj.css';
import '../../css/d/dmrlztban.css';
import '../../css/w/w72_i4b_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="evxcoq2mj"/><path class="dmrlztban"/><path class="w72_i4b_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:activity-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
