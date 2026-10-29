import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xm88ztbhq.css';
import '../../css/m/m7q2gkble.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/q/qewybs4fs.css';
import '../../css/t/tdfgkjbum.css';
import '../../css/n/nckl5mktr.css';
import '../../css/u/ur7tn0drj.css';
import '../../css/u/u9j-zf99r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xm88ztbhq"/><path class="m7q2gkble wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="qewybs4fs wm-k"/><path class="tdfgkjbum wm-a"/><path class="nckl5mktr wm-s"/><path class="ur7tn0drj wm-k"/><path class="u9j-zf99r wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-sparkles-blueprint"} {...others} />);
}

export default Component;
