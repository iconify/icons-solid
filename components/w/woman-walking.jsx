import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlwmhzbqp.css';
import '../../css/y/y18rwvb5w.css';
import '../../css/q/q-bwpcfpu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="hlwmhzbqp"/><path class="y18rwvb5w"/><path class="q-bwpcfpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-walking"} {...others} />);
}

export default Component;
