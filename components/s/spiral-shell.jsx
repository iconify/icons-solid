import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewq0qqsvm.css';
import '../../css/t/t439gvbnz.css';
import '../../css/r/rk1rhgo-z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ewq0qqsvm"/><path class="t439gvbnz"/><path class="rk1rhgo-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:spiral-shell"} {...others} />);
}

export default Component;
