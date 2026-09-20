import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kebp8vbig.css';
import '../../css/s/s-ypsc2gv.css';
import '../../css/j/j-85zuh7n.css';
import '../../css/m/mhih08bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kebp8vbig"/><path class="s-ypsc2gv"/><path class="j-85zuh7n"/><path class="mhih08bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-round-line-duotone"} {...others} />);
}

export default Component;
