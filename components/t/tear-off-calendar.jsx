import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4i3ki2pe.css';
import '../../css/k/keqtz3bzj.css';
import '../../css/a/auwbpk90i.css';
import '../../css/y/y36jsip8b.css';
import '../../css/a/a40iuzmks.css';
import '../../css/n/nhzr-4i1d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="e4i3ki2pe"/><path class="keqtz3bzj"/><path class="auwbpk90i"/><path class="y36jsip8b"/><path class="a40iuzmks"/><path class="nhzr-4i1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tear-off-calendar"} {...others} />);
}

export default Component;
