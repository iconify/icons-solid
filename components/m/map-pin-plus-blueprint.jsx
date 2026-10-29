import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j0eeqccgr.css';
import '../../css/o/o_u3cyb8t.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/o/o8bpjub7j.css';
import '../../css/n/nl0gnobci.css';
import '../../css/z/zawcaob5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="j0eeqccgr wm-deco"/><path class="o_u3cyb8t wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="o8bpjub7j wm-k"/><path class="nl0gnobci wm-s"/><path class="wm-k zawcaob5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-pin-plus-blueprint"} {...others} />);
}

export default Component;
