import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/us1q1oobo.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/p/p29y99yxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="us1q1oobo wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="p29y99yxr wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-grid-blueprint"} {...others} />);
}

export default Component;
