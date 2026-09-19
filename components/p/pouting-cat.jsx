import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrx78fg6b.css';
import '../../css/m/m8j7g0bqe.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="yrx78fg6b"/><path class="m8j7g0bqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:pouting-cat"} {...others} />);
}

export default Component;
