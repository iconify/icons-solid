import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/apjkb0boh.css';
import '../../css/x/x9i9d1bpz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="apjkb0boh"/><path class="x9i9d1bpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:left-facing-fist"} {...others} />);
}

export default Component;
