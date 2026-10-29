import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qe6vi1b0c.css';
import '../../css/u/ua-k4sbny.css';
import '../../css/g/gwb-v70hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qe6vi1b0c"/><path class="ua-k4sbny"/><path class="gwb-v70hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:calendar-minus"} {...others} />);
}

export default Component;
