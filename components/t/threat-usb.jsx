import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsmlzvbam.css';
import '../../css/r/rh7vx0boa.css';
import '../../css/l/lwfmi51_z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jsmlzvbam"/><path class="rh7vx0boa"/><path class="lwfmi51_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:threat-usb"} {...others} />);
}

export default Component;
