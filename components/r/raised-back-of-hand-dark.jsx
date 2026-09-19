import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_6_onqec.css';
import '../../css/z/zxlqvpvwv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y_6_onqec"/><path class="zxlqvpvwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:raised-back-of-hand-dark"} {...others} />);
}

export default Component;
