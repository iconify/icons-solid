import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nx22e_b0q.css';
import '../../css/o/oxyed4bhd.css';
import '../../css/i/ippy8g9bw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="nx22e_b0q"/><path class="oxyed4bhd"/><path class="ippy8g9bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:palette-sharp-two-tone"} {...others} />);
}

export default Component;
