import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yaljho52x.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/p/pq0fz3bmd.css';
import '../../css/f/fiarxjb9d.css';
import '../../css/v/vaib7gbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yaljho52x"/><path class="cf3uzcrzx wm-deco"/><path class="pq0fz3bmd wm-k"/><path class="fiarxjb9d wm-a"/><path class="vaib7gbcq wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-plus-blueprint"} {...others} />);
}

export default Component;
