import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m601o8v1p.css';
import '../../css/w/w4gnlobgl.css';
import '../../css/l/lg9wdcc1b.css';
import '../../css/z/z3rwheb9e.css';
import '../../css/l/lfu8-3bxw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="m601o8v1p"/><path class="w4gnlobgl"/><path class="lg9wdcc1b"/><path class="z3rwheb9e"/><path class="lfu8-3bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cold-face"} {...others} />);
}

export default Component;
