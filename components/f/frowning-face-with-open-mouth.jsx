import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/w/w4gnlobgl.css';
import '../../css/v/v4_7m1bqn.css';
import '../../css/s/sxlpl9tpb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="w4gnlobgl"/><path class="v4_7m1bqn"/><path class="sxlpl9tpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:frowning-face-with-open-mouth"} {...others} />);
}

export default Component;
