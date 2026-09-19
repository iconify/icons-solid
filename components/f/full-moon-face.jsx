import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg4tzgfjl.css';
import '../../css/l/l9373hz1x.css';
import '../../css/x/x7y684bgr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qg4tzgfjl"/><path class="l9373hz1x"/><path class="x7y684bgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:full-moon-face"} {...others} />);
}

export default Component;
