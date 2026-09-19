import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9_-bpbqh.css';
import '../../css/u/uqe2vbmeo.css';
import '../../css/x/x7y684bgr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="i9_-bpbqh"/><path class="uqe2vbmeo"/><path class="x7y684bgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:new-moon-face"} {...others} />);
}

export default Component;
