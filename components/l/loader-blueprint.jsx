import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bjqil1l7x.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/q/qa-0fibzt.css';
import '../../css/e/ey65q7bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bjqil1l7x wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="qa-0fibzt wm-k"/><path class="ey65q7bnk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:loader-blueprint"} {...others} />);
}

export default Component;
