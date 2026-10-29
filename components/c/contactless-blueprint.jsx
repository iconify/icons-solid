import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xlqvroe0h.css';
import '../../css/h/hz6bz3kis.css';
import '../../css/q/qcou4juum.css';
import '../../css/t/t6-3s1b-c.css';
import '../../css/l/l9w7xcc6c.css';
import '../../css/i/ix6krjyxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xlqvroe0h"/><path class="hz6bz3kis wm-deco"/><path class="qcou4juum wm-k"/><path class="t6-3s1b-c wm-a"/><path class="l9w7xcc6c wm-k"/><path class="ix6krjyxu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contactless-blueprint"} {...others} />);
}

export default Component;
