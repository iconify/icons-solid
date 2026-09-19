import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8hq4cbew.css';
import '../../css/f/fdvxqhjjg.css';
import '../../css/a/avvv9ks9z.css';
import '../../css/l/lei2cq_1a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="v8hq4cbew"/><path clip-rule="evenodd" class="fdvxqhjjg"/><path class="avvv9ks9z"/><path class="lei2cq_1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-dancing"} {...others} />);
}

export default Component;
