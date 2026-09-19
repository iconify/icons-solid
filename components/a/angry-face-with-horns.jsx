import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeupqovvp.css';
import '../../css/m/mij18mb7i.css';
import '../../css/v/vptk__bpz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qeupqovvp"/><path class="mij18mb7i"/><path class="vptk__bpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:angry-face-with-horns"} {...others} />);
}

export default Component;
