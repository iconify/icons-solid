import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1ff0s1ob.css';
import '../../css/c/cj6u56b5f.css';
import '../../css/r/rj5c37bgb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="o1ff0s1ob"/><path class="cj6u56b5f"/><path class="rj5c37bgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:hospital"} {...others} />);
}

export default Component;
