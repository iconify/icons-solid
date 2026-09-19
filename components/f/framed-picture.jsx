import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx_c-ib3q.css';
import '../../css/q/q1fy3-b7e.css';
import '../../css/o/o3lba2ruf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="dx_c-ib3q"/><path class="q1fy3-b7e"/><path class="o3lba2ruf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:framed-picture"} {...others} />);
}

export default Component;
