import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh4l7r3-i.css';
import '../../css/t/tk3k4fb_w.css';
import '../../css/i/i73u7ccvd.css';
import '../../css/t/tx048qugf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="qh4l7r3-i"/><circle class="tk3k4fb_w"/><circle class="i73u7ccvd"/><path class="tx048qugf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:emoji"} {...others} />);
}

export default Component;
