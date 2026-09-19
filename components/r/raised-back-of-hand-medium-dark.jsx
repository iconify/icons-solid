import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8-018-zj.css';
import '../../css/v/vusgyacxs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f8-018-zj"/><path class="vusgyacxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:raised-back-of-hand-medium-dark"} {...others} />);
}

export default Component;
