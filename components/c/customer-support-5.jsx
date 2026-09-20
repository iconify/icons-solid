import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-xv4_bra.css';
import '../../css/a/aq36ptbrf.css';
import '../../css/r/rhk9x3dmx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z-xv4_bra"/><path class="aq36ptbrf"/><path class="rhk9x3dmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:customer-support-5"} {...others} />);
}

export default Component;
