import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lm250x2mj.css';
import '../../css/y/yjq2_feke.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lm250x2mj"/><path clip-rule="evenodd" class="yjq2_feke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rightwards-hand-light"} {...others} />);
}

export default Component;
