import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d5_g3qhba.css';
import '../../css/k/k26wfpbvc.css';
import '../../css/c/c69-1vwtm.css';
import '../../css/l/llg7pdbbo.css';
import '../../css/w/wh0zujbon.css';
import '../../css/a/a25hrzb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="d5_g3qhba wm-deco"/><path class="k26wfpbvc wm-deco"/><path class="c69-1vwtm wm-deco"/><path class="llg7pdbbo wm-k"/><path class="wh0zujbon wm-a"/><path class="a25hrzb6t wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flower-blueprint"} {...others} />);
}

export default Component;
