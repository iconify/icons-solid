import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b3oskyb6b.css';
import '../../css/i/i8f9unb0o.css';
import '../../css/t/t9muv9fus.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="b3oskyb6b"/><path class="i8f9unb0o"/><path class="t9muv9fus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-mage"} {...others} />);
}

export default Component;
