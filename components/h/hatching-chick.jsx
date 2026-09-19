import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmjk-vj3s.css';
import '../../css/c/c45m9actk.css';
import '../../css/t/tvxcldbsv.css';
import '../../css/y/y97m3bylv.css';
import '../../css/c/cxrz_-ipi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wmjk-vj3s"/><path class="c45m9actk"/><path class="tvxcldbsv"/><path class="y97m3bylv"/><path class="cxrz_-ipi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hatching-chick"} {...others} />);
}

export default Component;
