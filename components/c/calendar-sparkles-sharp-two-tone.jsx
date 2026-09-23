import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yhnqlx3ap.css';
import '../../css/j/jpyjlobuf.css';
import '../../css/o/omi2j1bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="yhnqlx3ap"/><path class="jpyjlobuf"/><path class="omi2j1bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
