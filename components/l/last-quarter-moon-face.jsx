import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcc0wl48o.css';
import '../../css/h/hbqivvgcz.css';
import '../../css/v/vpppybr_c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vcc0wl48o"/><path class="hbqivvgcz"/><path class="vpppybr_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:last-quarter-moon-face"} {...others} />);
}

export default Component;
