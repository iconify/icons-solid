import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c10504c_y.css';
import '../../css/x/xmonqachm.css';
import '../../css/n/nh9blnb5t.css';
import '../../css/b/blle8sbdx.css';
import '../../css/q/q0-0zc1kb.css';
import '../../css/r/r6qeh7b4a.css';
import '../../css/a/ac1axvb8l.css';
import '../../css/k/ku7r0b1_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c10504c_y wm-shadow"/><path class="wm-shadow xmonqachm"/><path class="nh9blnb5t"/><path class="blle8sbdx"/><path class="q0-0zc1kb"/><path class="r6qeh7b4a"/><path class="ac1axvb8l"/><path class="ku7r0b1_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:receipt-text"} {...others} />);
}

export default Component;
