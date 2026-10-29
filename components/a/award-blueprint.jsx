import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l4zmzkh2z.css';
import '../../css/r/rfii-0k4v.css';
import '../../css/g/gdh659iej.css';
import '../../css/p/pz7_a8apx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="l4zmzkh2z wm-deco"/><circle class="rfii-0k4v wm-k"/><circle class="gdh659iej wm-a"/><path class="pz7_a8apx wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:award-blueprint"} {...others} />);
}

export default Component;
