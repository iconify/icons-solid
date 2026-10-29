import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/ldjp7fxzo.css';
import '../../css/v/vkhck6o7w.css';
import '../../css/g/grta0fb4t.css';
import '../../css/d/d4oewab_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ldjp7fxzo wm-deco"/><path class="vkhck6o7w wm-deco"/><path class="grta0fb4t wm-k"/><path class="d4oewab_d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:waves-blueprint"} {...others} />);
}

export default Component;
