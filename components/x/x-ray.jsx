import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i2q87wbqk.css';
import '../../css/f/fqee-rp0p.css';
import '../../css/z/zl7eblc8z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="i2q87wbqk"/><path class="fqee-rp0p"/><path class="zl7eblc8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:x-ray"} {...others} />);
}

export default Component;
