import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q67lela2z.css';
import '../../css/e/etm45wn7e.css';
import '../../css/i/iln4v0bdz.css';
import '../../css/v/vx7ekl86x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q67lela2z"/><path class="etm45wn7e"/><path class="iln4v0bdz"/><path class="vx7ekl86x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:church"} {...others} />);
}

export default Component;
