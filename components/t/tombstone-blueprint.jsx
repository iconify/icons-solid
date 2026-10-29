import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y1etg-qvq.css';
import '../../css/e/eytbpv9nw.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/p/p-cqkx0gi.css';
import '../../css/k/ktm4s-b6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y1etg-qvq"/><path class="eytbpv9nw wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="p-cqkx0gi wm-k"/><path class="ktm4s-b6m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tombstone-blueprint"} {...others} />);
}

export default Component;
