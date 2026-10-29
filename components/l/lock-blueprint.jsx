import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p5a8rkbkg.css';
import '../../css/q/qaz708b7b.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/n/nvjwwccph.css';
import '../../css/n/nz1qr5btk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p5a8rkbkg wm-deco"/><path class="qaz708b7b wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="nvjwwccph wm-k"/><path class="nz1qr5btk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lock-blueprint"} {...others} />);
}

export default Component;
