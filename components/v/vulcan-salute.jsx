import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l72lb3bht.css';
import '../../css/f/fa92gabba.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="l72lb3bht"/><path class="fa92gabba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:vulcan-salute"} {...others} />);
}

export default Component;
