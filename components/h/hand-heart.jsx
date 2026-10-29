import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n2akhfbpl.css';
import '../../css/e/eg_tgsusb.css';
import '../../css/o/og01tokas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n2akhfbpl"/><path class="eg_tgsusb"/><path class="og01tokas wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hand-heart"} {...others} />);
}

export default Component;
