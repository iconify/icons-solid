import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vpbf8gbhb.css';
import '../../css/r/rwwqizbed.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vpbf8gbhb"/><path class="rwwqizbed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-holding-back-tears"} {...others} />);
}

export default Component;
