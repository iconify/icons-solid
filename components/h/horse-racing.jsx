import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z7vykgw1o.css';
import '../../css/i/ibe9t6lyh.css';
import '../../css/j/jv7f0-boz.css';
import '../../css/u/uayp1jl3d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="z7vykgw1o"/><path class="ibe9t6lyh"/><path class="jv7f0-boz"/><path class="uayp1jl3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:horse-racing"} {...others} />);
}

export default Component;
