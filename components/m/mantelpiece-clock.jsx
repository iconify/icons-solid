import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yptfkjl7w.css';
import '../../css/j/j3spvb9xn.css';
import '../../css/r/r5t1r1vru.css';
import '../../css/f/fk2aglbac.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yptfkjl7w"/><path class="j3spvb9xn"/><path class="r5t1r1vru"/><path class="fk2aglbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mantelpiece-clock"} {...others} />);
}

export default Component;
