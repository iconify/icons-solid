import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/db9oi35bt.css';
import '../../css/u/ul60bd9vy.css';
import '../../css/m/mb8si40xz.css';
import '../../css/h/h5q3i4bpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="db9oi35bt wm-deco"/><path class="ul60bd9vy wm-k"/><path class="mb8si40xz wm-a"/><path class="h5q3i4bpp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:turtle-blueprint"} {...others} />);
}

export default Component;
