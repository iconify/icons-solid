import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwpw8pmwr.css';
import '../../css/a/a0dra1bav.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="pwpw8pmwr"/><path class="a0dra1bav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:suspension-railway"} {...others} />);
}

export default Component;
