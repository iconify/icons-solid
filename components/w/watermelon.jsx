import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6ss5oxsf.css';
import '../../css/i/ix4vl_b_u.css';
import '../../css/x/xbd7wwzmz.css';
import '../../css/q/q01-6ebhb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w6ss5oxsf"/><path class="ix4vl_b_u"/><path class="xbd7wwzmz"/><path class="q01-6ebhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:watermelon"} {...others} />);
}

export default Component;
