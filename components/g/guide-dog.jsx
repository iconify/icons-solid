import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3n31p1sz.css';
import '../../css/u/uasx7_1qo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="e3n31p1sz"/><path class="uasx7_1qo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:guide-dog"} {...others} />);
}

export default Component;
