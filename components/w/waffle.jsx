import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6xhn3kbs.css';
import '../../css/v/va6flgbjg.css';
import '../../css/w/wxs07lbfh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="x6xhn3kbs"/><path class="va6flgbjg"/><path class="wxs07lbfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:waffle"} {...others} />);
}

export default Component;
