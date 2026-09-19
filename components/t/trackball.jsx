import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls74uostr.css';
import '../../css/a/axngztbwa.css';
import '../../css/q/qk0sq3q3j.css';
import '../../css/i/irtxrpidt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ls74uostr"/><path class="axngztbwa"/><path class="qk0sq3q3j"/><path class="irtxrpidt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:trackball"} {...others} />);
}

export default Component;
