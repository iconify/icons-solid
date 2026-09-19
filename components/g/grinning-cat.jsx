import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edat04vhg.css';
import '../../css/o/o3fjw2b-r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="edat04vhg"/><path class="o3fjw2b-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:grinning-cat"} {...others} />);
}

export default Component;
