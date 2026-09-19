import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6-iq1b3w.css';
import '../../css/z/zf8j9abed.css';
import '../../css/p/p391oe76j.css';
import '../../css/k/kozy9j0yb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h6-iq1b3w"/><path class="zf8j9abed"/><path class="p391oe76j"/><path class="kozy9j0yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mechanical-arm"} {...others} />);
}

export default Component;
