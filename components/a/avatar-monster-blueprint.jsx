import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rwl7u5b9f.css';
import '../../css/w/wvzx3gczq.css';
import '../../css/n/nge5cfbll.css';
import '../../css/p/pyewu0dff.css';
import '../../css/q/qbc871vgt.css';
import '../../css/p/pfp6hfb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rwl7u5b9f wm-deco"/><path class="wm-deco wvzx3gczq"/><path class="nge5cfbll wm-deco"/><path class="pyewu0dff wm-k"/><path class="qbc871vgt wm-a"/><path class="pfp6hfb3z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-blueprint"} {...others} />);
}

export default Component;
