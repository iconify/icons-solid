import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/duj3z92ei.css';
import '../../css/x/xlde7_boa.css';
import '../../css/y/y5qodxd4s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="duj3z92ei"/><path class="xlde7_boa"/><path class="y5qodxd4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:magic-wand"} {...others} />);
}

export default Component;
