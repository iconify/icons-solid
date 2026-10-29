import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h5oye5b4h.css';
import '../../css/m/mnfeitrok.css';
import '../../css/m/mgw-d-ien.css';
import '../../css/s/spcrj-78i.css';
import '../../css/e/efmjw0brb.css';
import '../../css/p/p2_261bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="h5oye5b4h wm-deco"/><path class="mnfeitrok wm-deco"/><path class="mgw-d-ien wm-k"/><path class="spcrj-78i wm-a"/><path class="efmjw0brb wm-k"/><path class="p2_261bcc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:a-large-small-blueprint"} {...others} />);
}

export default Component;
