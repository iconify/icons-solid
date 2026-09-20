import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ry_1filvv.css';
import '../../css/w/wixkk1b9o.css';
import '../../css/l/ltx2-3bye.css';
import '../../css/x/xdpngdcke.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ry_1filvv"/><path class="wixkk1b9o"/><path class="ltx2-3bye"/><path class="xdpngdcke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:button-rewind-2"} {...others} />);
}

export default Component;
