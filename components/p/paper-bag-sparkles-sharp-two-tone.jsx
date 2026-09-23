import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/epepgykcc.css';
import '../../css/x/xhj1trd8o.css';
import '../../css/t/t-fa8-bok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="epepgykcc"/><path class="xhj1trd8o"/><path class="t-fa8-bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paper-bag-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
