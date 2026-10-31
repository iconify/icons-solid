import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l59i_oblg.css';
import '../../css/o/ofavwbb7u.css';
import '../../css/h/h6026w25h.css';
import '../../css/j/j-pylbk1b.css';
import '../../css/b/bhiwjcb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l59i_oblg wm-shadow"/><path class="ofavwbb7u"/><path class="h6026w25h"/><path class="j-pylbk1b"/><path class="bhiwjcb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bell-concierge"} {...others} />);
}

export default Component;
