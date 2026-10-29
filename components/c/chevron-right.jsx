import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urvk3ljoi.css';
import '../../css/t/tdovuczxl.css';
import '../../css/e/eo30z-b8x.css';
import '../../css/f/fs7-ihb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="urvk3ljoi wm-k"/><path class="tdovuczxl wm-k"/><path class="eo30z-b8x wm-k"/><path class="fs7-ihb4l wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevron-right"} {...others} />);
}

export default Component;
