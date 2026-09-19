import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dr4nqvw3k.css';
import '../../css/e/e7ha1tbiu.css';
import '../../css/a/akrz7xbnl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="dr4nqvw3k"/><path class="e7ha1tbiu"/><path class="akrz7xbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-judge"} {...others} />);
}

export default Component;
