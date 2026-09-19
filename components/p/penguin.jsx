import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6vv4yb6l.css';
import '../../css/w/w0m1pxb-u.css';
import '../../css/c/cimrciz-d.css';
import '../../css/y/y6ia5_idg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="e6vv4yb6l"/><path class="w0m1pxb-u"/><path class="cimrciz-d"/><path class="y6ia5_idg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:penguin"} {...others} />);
}

export default Component;
