import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-8ytgyeg.css';
import '../../css/e/echrkbc0t.css';
import '../../css/z/zer7usb_s.css';
import '../../css/r/rrm0jqaix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i-8ytgyeg wm-k"/><path class="echrkbc0t wm-k"/><path class="wm-k zer7usb_s"/><path class="rrm0jqaix wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bug-gloss"} {...others} />);
}

export default Component;
