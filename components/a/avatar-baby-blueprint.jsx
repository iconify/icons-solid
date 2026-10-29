import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qrdomxblq.css';
import '../../css/i/itsuj7bqe.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/o/od5nvabry.css';
import '../../css/q/q9kq7dj7j.css';
import '../../css/w/wvvr-cbnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qrdomxblq wm-deco"/><path class="itsuj7bqe wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="od5nvabry wm-k"/><path class="q9kq7dj7j wm-a"/><path class="wm-a wvvr-cbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-baby-blueprint"} {...others} />);
}

export default Component;
