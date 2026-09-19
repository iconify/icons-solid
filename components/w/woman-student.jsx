import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8fqkhurf.css';
import '../../css/t/ti0i6rbbm.css';
import '../../css/x/xtlzm-3op.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="j8fqkhurf"/><path class="ti0i6rbbm"/><path class="xtlzm-3op"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-student"} {...others} />);
}

export default Component;
