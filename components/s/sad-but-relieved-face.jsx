import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/h/h9iiy9t5d.css';
import '../../css/e/eq_-q9b0t.css';
import '../../css/s/skgj4-p1e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="h9iiy9t5d"/><path class="eq_-q9b0t"/><path class="skgj4-p1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sad-but-relieved-face"} {...others} />);
}

export default Component;
