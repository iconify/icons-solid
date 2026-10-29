import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zeojv2bql.css';
import '../../css/z/z3ys52bre.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/i/is_-82b8q.css';
import '../../css/f/f7t4iy9lb.css';
import '../../css/h/h7mhxehje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zeojv2bql"/><path class="wm-deco z3ys52bre"/><path class="cf3uzcrzx wm-deco"/><path class="is_-82b8q wm-k"/><path class="f7t4iy9lb wm-s"/><path class="h7mhxehje wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-outgoing-blueprint"} {...others} />);
}

export default Component;
