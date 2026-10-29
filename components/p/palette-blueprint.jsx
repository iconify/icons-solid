import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h0x03r3ma.css';
import '../../css/x/xb52eebsk.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/o/onq_9wbtr.css';
import '../../css/q/qi8t6w18c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="h0x03r3ma wm-deco"/><path class="wm-deco xb52eebsk"/><path class="o7-ag87sb wm-deco"/><path class="onq_9wbtr wm-k"/><path class="qi8t6w18c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:palette-blueprint"} {...others} />);
}

export default Component;
