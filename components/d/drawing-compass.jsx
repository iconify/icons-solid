import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/htvod5bir.css';
import '../../css/a/aewx8hb7s.css';
import '../../css/l/lpt3adcma.css';
import '../../css/k/k4omzib4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="htvod5bir"/><path class="aewx8hb7s"/><path class="lpt3adcma"/><path class="k4omzib4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:drawing-compass"} {...others} />);
}

export default Component;
