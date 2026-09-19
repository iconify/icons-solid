import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/djnm4x-rn.css';
import '../../css/p/pwakqpbdf.css';
import '../../css/g/gyuq7dwhf.css';
import '../../css/i/i87qd9t-p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="djnm4x-rn"/><path class="pwakqpbdf"/><path class="gyuq7dwhf"/><path class="i87qd9t-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-beard"} {...others} />);
}

export default Component;
