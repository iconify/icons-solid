import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sleizizdy.css';
import '../../css/u/u43fgobpl.css';
import '../../css/d/dtd56ubxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sleizizdy"/><rect class="u43fgobpl"/><path class="dtd56ubxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-line-duotone"} {...others} />);
}

export default Component;
