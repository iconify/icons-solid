import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vk9xs0tks.css';
import '../../css/b/bkfrv9bzn.css';
import '../../css/g/gxzyiwbeo.css';
import '../../css/t/tbddi3b5h.css';
import '../../css/v/v-jw61b1y.css';
import '../../css/s/skq-93bmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vk9xs0tks wm-deco"/><path class="bkfrv9bzn wm-deco"/><path class="gxzyiwbeo wm-k"/><path class="tbddi3b5h wm-a"/><path class="v-jw61b1y wm-k"/><path class="skq-93bmt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-left-to-line-blueprint"} {...others} />);
}

export default Component;
