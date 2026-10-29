import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/waos4ubra.css';
import '../../css/r/rm6k7ob7j.css';
import '../../css/a/ab7bixb3l.css';
import '../../css/q/q2zxisdlc.css';
import '../../css/x/x8nxfie8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="waos4ubra wm-deco"/><path class="rm6k7ob7j wm-deco"/><path class="ab7bixb3l wm-deco"/><path class="q2zxisdlc"/><path class="x8nxfie8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-blueprint"} {...others} />);
}

export default Component;
