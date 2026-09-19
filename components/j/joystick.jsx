import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1k5prs-e.css';
import '../../css/j/j9n7iubvg.css';
import '../../css/v/vzvzjnbsc.css';
import '../../css/h/hunp8wb_p.css';
import '../../css/e/ef5_fibav.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k1k5prs-e"/><path class="j9n7iubvg"/><path class="vzvzjnbsc"/><path class="hunp8wb_p"/><path class="ef5_fibav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:joystick"} {...others} />);
}

export default Component;
