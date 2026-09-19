import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t01_vl9ex.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/r/rk7o8cb4o.css';
import '../../css/t/tzh14l3ea.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="t01_vl9ex"/><path class="jnd9-ne4y"/><path class="rk7o8cb4o"/><path class="tzh14l3ea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:smiling-face-with-halo"} {...others} />);
}

export default Component;
