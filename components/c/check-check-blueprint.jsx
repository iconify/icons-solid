import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q2ox3ufos.css';
import '../../css/v/vu5vvzbot.css';
import '../../css/r/rac9nojis.css';
import '../../css/b/b41kq8bcy.css';
import '../../css/b/bvafbazrq.css';
import '../../css/k/kmq8gib2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="q2ox3ufos wm-deco"/><path class="vu5vvzbot wm-deco"/><path class="rac9nojis wm-k"/><path class="b41kq8bcy wm-a"/><path class="bvafbazrq wm-k"/><path class="kmq8gib2f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:check-check-blueprint"} {...others} />);
}

export default Component;
